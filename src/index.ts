import * as core from "@actions/core"
import * as github from "@actions/github"
import { createComment } from "./utils"
import { ethers } from "ethers"
import { IssueCommentEvent } from "@octokit/webhooks-definitions/schema"

try {
  const payload = github.context.payload

  // trigger action on comment
  if (payload.comment) {
    if (payload.comment.body === "trigger auto comment") {
      const commentPayload = payload as IssueCommentEvent
      createComment(commentPayload, "ciao dalla repo")
    }
  } else {
    // trigger action on merge
  }

  console.log("payload", payload)
} catch (error: any) {
  core.setFailed(error.message)
}
