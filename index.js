const core = require("@actions/core")
const github = require("@actions/github")

try {
  // `address` input defined in action metadata file
  const slicer = core.getInput("slicer")
  console.log(slicer, "slicer")
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = github.context.payload

  const address = payload.inputs.address
  const slices = payload.inputs.slices
  console.log(`Address ${address}!`)
  console.log(`Slicer ${slicer}!`)
  console.log(`Mint ${slices} slices!`)
} catch (error) {
  core.setFailed(error.message)
}
