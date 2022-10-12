"use strict"
const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")

try {
  // get inputs from the workflow
  const payload = github.context.payload
  console.log("payload", payload)
} catch (error) {
  core.setFailed(error.message)
}
