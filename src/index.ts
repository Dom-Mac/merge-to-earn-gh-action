import * as core from "@actions/core"
import * as github from "@actions/github"
import { createComment, editComment } from "./utils/githubHandler"
import {
  IssueCommentEvent,
  PullRequestEvent
} from "@octokit/webhooks-definitions/schema"
import { onPrOpenedMessage, onSlicesRequestMessage } from "./utils/messages"
import fetch from "./utils/fetch"
import { sliceCore } from "./utils/initContracts"
import { controllerCheck } from "./utils/controllerCheck"

export const slicerId = core.getInput("slicer_id")
export const safeAddress = core.getInput("safe_address")
console.log(safeAddress, "index safe addr")

export default async function init() {
  try {
    const payload = github.context.payload
    console.log("payload", payload)

    // Triggers action on comment
    if (payload.comment) {
      console.log("------ comment -----")
      const text: string = payload.comment.body
      const requiredText = "### Slice distribution request"
      const splitText = text.split("-")
      let botMessage: string

      const commentPayload = <IssueCommentEvent>payload // type casting
      if (
        splitText[0].trim() === requiredText &&
        commentPayload.issue.state == "open"
      ) {
        const author = commentPayload.issue.user.login
        const comments = await fetch(commentPayload.issue.comments_url)
        const firstBotComment = comments.find(
          (el: any) =>
            el.user.login === "github-actions[bot]" &&
            el.body.includes(`### 👋 Gm @${author}`)
        )

        // Check if comment's user is the PR owner
        if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
          // Set bot message to fire in create comment
          // m is defined based on success
          const [m, success, totalSlices] = await onSlicesRequestMessage(
            slicerId,
            splitText
          )
          botMessage = m
          // TODO: Add type checks on addresses and sliceAmounts
          // Edit first bot comment
          if (success) {
            const newFirstMessage =
              onPrOpenedMessage(author, slicerId, totalSlices) +
              "\n\n --- \n\n" +
              botMessage

            // If there is a pinned comment
            if (firstBotComment) {
              editComment(firstBotComment.id, newFirstMessage)
            } else {
              await controllerCheck(slicerId, safeAddress)
              createComment(commentPayload.issue.number, newFirstMessage)
            }
          }
        } else {
          botMessage =
            "User not authorized, only the PR owner can request slice distributions"
        }
        if (
          firstBotComment ||
          !botMessage.includes("### Upcoming slice distribution:")
        ) {
          createComment(commentPayload.issue.number, botMessage)
        }
      }
    } else {
      await controllerCheck(slicerId, safeAddress)

      // Triggers respectively the action on merge or the one on PR opened
      const prPayload = <PullRequestEvent>payload
      if (prPayload.action === "opened") {
        const totalSlices = Number(await sliceCore.totalSupply(slicerId))
        const author = prPayload.pull_request.user.login
        createComment(
          prPayload.pull_request.number,
          onPrOpenedMessage(author, slicerId, totalSlices)
        )
      }
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

init()
