const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")

try {
  // get inputs from the workflow
  const slicer = core.getInput("slicer")
  const payload = github.context.payload
  const address = payload.inputs.address
  const slices = payload.inputs.slices

  // Set provider and signer
  const provider = new ethers.providers.AlchemyProvider("homestead")

  provider.getBalance("jacopo.eth").then((value) => console.log(value, "value"))

  console.log(slicer, "slicer")
  console.log(`Address ${address}!`)
  console.log(`Slicer ${slicer}!`)
  console.log(`Mint ${slices} slices!`)
  console.log("payload", payload)
} catch (error) {
  core.setFailed(error.message)
}
