"use strict"
const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")

try {
  // get inputs from the workflow
  const payload = github.context.payload
  const event = core.getInput("event")
  console.log("payload", payload)
  console.log({ event })
} catch (error) {
  core.setFailed(error.message)
}
