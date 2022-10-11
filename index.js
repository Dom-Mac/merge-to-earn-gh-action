const core = require("@actions/core")
const github = require("@actions/github")

try {
  // `address` input defined in action metadata file
  const slicer = core.getInput("slicer")
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
  console.log(`inputs: ${payload.inputs}`)

  // const address = payload.inputs.address
  // const slices = payload.inputs.slices
  // console.log(`Address ${address}!`)
  // console.log(`Slicer ${slicer}!`)
  // console.log(`Mint ${slices} slices!`)
} catch (error) {
  core.setFailed(error.message)
}
