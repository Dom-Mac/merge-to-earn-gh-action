const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")

try {
  const payload = github.context.payload

  if (payload.comment) {
  } else {
  }

  console.log("payload", payload)
} catch (error: any) {
  core.setFailed(error.message)
}
