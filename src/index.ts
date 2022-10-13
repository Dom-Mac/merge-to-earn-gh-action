import * as core from "@actions/core"
import * as github from "@actions/github"
import { createComment } from "./utils/githubHandler"
import {
  IssueCommentEvent,
  PullRequestEvent
} from "@octokit/webhooks-definitions/schema"
import { onPrOpenedMessage, onRequestMessage } from "./utils/messages"

export default async function init() {
  try {
    const payload = github.context.payload
    const slicer = core.getInput("slicer")
    console.log("payload", payload)

    // Triggers action on comment
    if (payload.comment) {
      console.log("---- comment action ----")
      const text: string = payload.comment.body
      const requiredText = "### Contributor slices request"
      const splitText = text.split("-")
      let message: string

      if (splitText[0].trim() === requiredText) {
        console.log("---- required text ----")
        const commentPayload = <IssueCommentEvent>payload // type casting
        // Check if the comment user is the pr owner
        if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
          console.log("---- required text user authorized ----")
          let totalSlices = 0
          // TODO: Add checks on addresses and sliceAmounts types
          // custom message defines the slices | address table
          const customMessage = splitText
            .slice(1)
            .map((el) => {
              const [address, sliceAmount] = el.split(":")
              totalSlices += Number(sliceAmount)
              return "| " + sliceAmount.trim() + " | " + address.trim() + " |"
            })
            .join(" \n ")

          message = onRequestMessage(customMessage, String(totalSlices))
        } else {
          console.log("---- required text user not authorized ----")
          message = "User not authorized, only the PR owner can request slices"
        }
        createComment(commentPayload.issue.number, message)
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
