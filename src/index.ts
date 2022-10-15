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

export default async function init() {
  try {
    const payload = github.context.payload
    const slicerId = core.getInput("slicer_id")
    console.log("payload", payload)

    // Triggers action on comment
    if (payload.comment) {
      const text: string = payload.comment.body
      const requiredText = "### Slice distribution request"
      const splitText = text.split("-")
      let botMessage: string

      if (splitText[0].trim() === requiredText) {
        const commentPayload = <IssueCommentEvent>payload // type casting
        const author = commentPayload.issue.user.login
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
            const comments = await fetch(commentPayload.issue.comments_url)
            const firstBotComment = comments.filter(
              (el: any) =>
                el.user.login === "github-actions[bot]" &&
                el.body.includes(`### 👋 Gm @${author}`)
            )[0]
            const newFirstMessage =
              (await onPrOpenedMessage(author, slicerId, totalSlices)) +
              "\n" +
              botMessage
            editComment(firstBotComment.id, newFirstMessage)
          }
        } else {
          botMessage =
            "User not authorized, only the PR owner can request slice distributions"
        }
        createComment(commentPayload.issue.number, botMessage)
      }
    } else {
      // Triggers respectively the action on merge or the one on PR opened
      const prPayload = <PullRequestEvent>payload
      if (prPayload.action === "opened") {
        const totalSlices = Number(await sliceCore.totalSupply(slicerId))
        const author = prPayload.pull_request.user.login
        createComment(
          prPayload.pull_request.number,
          await onPrOpenedMessage(author, slicerId, totalSlices)
        )
      }
    }
  } catch (error: any) {
    console.log(error.message)
  }
}

init()
