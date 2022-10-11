const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")
const SlicerContract = require("artifacts/Slicer.json")

try {
  // get inputs from the workflow
  const slicerAddress = core.getInput("slicer")
  const alchemyApiKey = core.getInput("alchemy_api_key")
  const payload = github.context.payload
  const address = payload.inputs.address
  const slices = payload.inputs.slices

  // Set provider and signer
  const provider = new ethers.providers.AlchemyProvider(
    "homestead",
    alchemyApiKey
  )
  provider.getBalance("jacopo.eth").then((value) => console.log(value, "value"))
  const signer = ethers.Wallet.createRandom().connect(provider)
  console.log(signer, "signer")
  const slicerContract = new ethers.Contract(
    slicerAddress,
    SlicerContract.abi,
    signer
  )
  const getProductAllowed = async () => {
    const isPayeeAllowed = await slicerContract.isPayeeAllowed(
      "0x4D5d7d63989BBE6358a3352A2449d59Aa5A08267"
    )
    console.log(
      isPayeeAllowed,
      "isPayeeAllowed 0x4D5d7d63989BBE6358a3352A2449d59Aa5A08267"
    )
  }
  getProductAllowed()

  console.log(slicer, "slicer")
  console.log(`Address ${address}!`)
  console.log(`Slicer ${slicer}!`)
  console.log(`Mint ${slices} slices!`)
  console.log("payload", payload)
} catch (error) {
  core.setFailed(error.message)
}
