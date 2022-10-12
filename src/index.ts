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
    console.log(payload.comment.body)
    if (payload.comment.body === "trigger auto comment") {
      const commentPayload = payload as IssueCommentEvent
      createComment(commentPayload.issue.number, "ciao dalla repo")
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
