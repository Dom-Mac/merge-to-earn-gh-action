const core = require("@actions/core")
const github = require("@actions/github")
const { ethers } = require("ethers")
const SlicerContract = require("./Slicer.json")

try {
  // get inputs from the workflow
  const slicerAddress = core.getInput("slicer")
  const alchemyApiKey = core.getInput("alchemy_api_key")
  const payload = github.context.payload
  const address = payload.inputs.address
  const slices = payload.inputs.slices

  // Set provider and signer
  const provider = new ethers.providers.AlchemyProvider("goerli", alchemyApiKey)
  provider.getBalance(address).then((value) => console.log(value, "value"))
  const signer = ethers.Wallet.createRandom().connect(provider)
  console.log(signer, "signer")
  const slicerContract = new ethers.Contract(
    slicerAddress,
    SlicerContract.abi,
    signer
  )
  const getProductAllowed = async () => {
    const isPayeeAllowed = await slicerContract.isPayeeAllowed(address)
    console.log(isPayeeAllowed, "isPayeeAllowed")
  }
  getProductAllowed()

  console.log(slicerAddress, "slicer")
  console.log(`Address ${address}!`)
  console.log(`Mint ${slices} slices!`)
  console.log("payload", payload)
} catch (error) {
  core.setFailed(error.message)
}
