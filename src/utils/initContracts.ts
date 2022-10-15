import { ethers } from "ethers"
import { SliceCore } from "../types/SliceCore"

const sliceCoreInterface = require("src/abi/SliceCore.json")
const sliceCoreAddress = "0x21da1b084175f95285B49b22C018889c45E1820d"
const alchemyId = process.env.ALCHEMY_ID
const provider = new ethers.providers.AlchemyProvider("mainnet", alchemyId)

export const sliceCore = new ethers.Contract(
  sliceCoreAddress,
  sliceCoreInterface.abi,
  provider
) as SliceCore
