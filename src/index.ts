import * as core from "@actions/core"
import * as github from "@actions/github"
import { createComment, editComment } from "./utils/githubHandler"
import {
  IssueCommentEvent,
  PullRequestEvent
} from "@octokit/webhooks-definitions/schema"
import { onPrOpenedMessage, onRequestMessage } from "./utils/messages"
import fetch from "./utils/fetch"

export default async function init() {
  try {
    const payload = github.context.payload
    const slicer = core.getInput("slicer")
    console.log("payload", payload)

    // Triggers action on comment
    if (payload.comment) {
      const text: string = payload.comment.body
      const requiredText = "### Contributor slices request"
      const splitText = text.split("-")
      let botMessage: string

      if (splitText[0].trim() === requiredText) {
        const commentPayload = <IssueCommentEvent>payload // type casting
        // Check if comment's user is the PR owner
        if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
          // TODO: Add type checks on addresses and sliceAmounts
          // Edit first bot comment
          const comments = await fetch(commentPayload.issue.comments_url)
          const firstBotComment = comments.filter(
            (el: any) =>
              el.user.login === "github-actions[bot]" &&
              el.body.includes("### Hi Anon")
          )[0]

          console.log(firstBotComment)

          // Set bot message to fire in create comment
          botMessage = onRequestMessage(splitText)
        } else {
          botMessage =
            "User not authorized, only the PR owner can request slices"
        }
        createComment(commentPayload.issue.number, botMessage)
      }
    } else {
      // Triggers respectively the action on merge or the one on PR opened
      const prPayload = <PullRequestEvent>payload
      if (prPayload.action === "opened") {
        createComment(prPayload.pull_request.number, onPrOpenedMessage(slicer))
      }
    }
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

init()
