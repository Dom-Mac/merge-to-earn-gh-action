import * as core from "@actions/core"
import * as github from "@actions/github"
import { createComment } from "./utils"
import { ethers } from "ethers"
import {
  IssueCommentEvent,
  PullRequestEvent
} from "@octokit/webhooks-definitions/schema"

try {
  const payload = github.context.payload

  // trigger action on comment
  if (payload.comment) {
    const text: string = payload.comment.body
    const requiredText = "### Contributor slices request"
    const splitText = text.split("-")

    if (splitText[0].trim() === requiredText) {
      const commentPayload = payload as IssueCommentEvent
      let totalSlices = 0
      const message = splitText
        .slice(1)
        .map((el) => {
          const [address, sliceAmount] = el.split(":")
          totalSlices += Number(sliceAmount)
          return "| " + sliceAmount.trim() + " | " + address.trim() + " |"
        })
        .join(" \n ")
      createComment(
        commentPayload.issue.number,
        "### New upcoming slices distribution: \n| Slices | Address |\n| --- | --- |\n" +
          message +
          "\n **Total slices minted:** " +
          totalSlices
      )
    }
  } else {
    // trigger action on merge or on open
    const prPayload = payload as PullRequestEvent
    if (prPayload.action === "opened") {
      createComment(prPayload.pull_request.number, "ciao dalla repo on init")
    } else {
    }
  }

  console.log("payload", payload)
} catch (error: any) {
  core.setFailed(error.message)
}
