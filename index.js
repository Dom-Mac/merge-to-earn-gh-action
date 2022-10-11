const core = require("@actions/core")
const github = require("@actions/github")

try {
  // `address` input defined in action metadata file
  const address = core.getInput("address")
  const slicer = core.getInput("slicer")
  const slices = core.getInput("slices")
  console.log(`Address ${address}!`)
  console.log(`Slicer ${slicer}!`)
  console.log(`Mint ${slices} slices!`)

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}
