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
    console.log({ text })
    const requiredText = "### Contributor slices request"
    console.log({ requiredText })
    const splitText = text.split("-")
    console.log({ splitText })

    if (splitText[0].trim() === requiredText) {
      const commentPayload = payload as IssueCommentEvent
      const message = splitText
        .slice(1)
        .map((el) => {
          const [address, sliceAmount] = el.split(":")
          return `- ${sliceAmount.trim()} to ${address.trim()}`
        })
        .join(" /n ")
      console.log({ message })
      createComment(
        commentPayload.issue.number,
        `Upon merge the following slices will be minted: /n ${message}`
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
