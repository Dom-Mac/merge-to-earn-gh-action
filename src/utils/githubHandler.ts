import * as core from "@actions/core"
import * as github from "@actions/github"

export function getOctokit() {
  const token = core.getInput("SECRET_TOKEN", { required: true })
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
  return data
}

export async function editComment(id: number, message: string) {
  const octokit = getOctokit()
  const { context } = github
  const { data } = await octokit.rest.issues.updateComment({
    ...context.repo,
    comment_id: id,
    body: message
  })
  return data
}
