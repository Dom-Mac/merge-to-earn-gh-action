import * as core from "@actions/core"
import * as github from "@actions/github"
import { IssueCommentEvent } from "@octokit/webhooks-definitions/schema"

export function getOctokit() {
  const token = core.getInput("GITHUB_TOKEN", { required: true })
  return github.getOctokit(token)
}

export async function createComment(number: number, message: string) {
  const octokit = getOctokit()
  const { context } = github
  const { data } = await octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: number,
    body: message
  })
}
