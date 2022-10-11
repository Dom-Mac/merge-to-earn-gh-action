const core = require("@actions/core")
const github = require("@actions/github")

try {
  // `address` input defined in action metadata file
  const slicer = core.getInput("slicer")
  console.log(slicer, "slicer")
  // Get the JSON webhook payload for the event that triggered the workflow
  const payloadJSON = JSON.stringify(github.context.payload)
  const payload = github.context.payload
  console.log(`The event payload: ${payloadJSON.inputs}`)
  console.log(`The event payload: ${payloadJSON["inputs"]}`)
  console.log(`payload jason: ${payload.inputs}`)
  console.log(`payload jason: ${payload["inputs"]}`)

  // const address = payload.inputs.address
  // const slices = payload.inputs.slices
  // console.log(`Address ${address}!`)
  // console.log(`Slicer ${slicer}!`)
  // console.log(`Mint ${slices} slices!`)
} catch (error) {
  core.setFailed(error.message)
}
