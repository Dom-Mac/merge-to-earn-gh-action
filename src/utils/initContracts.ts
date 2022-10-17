import { ethers } from "ethers"
import { SliceCore } from "../types/SliceCore"
import { GnosisSafe } from "../types/GnosisSafe"
import { sliceCoreInterface } from "../abi/SliceCore"
import { gnosisSafeInterface } from "../abi/GnosisSafe"
import { safeAddress } from ".."

export const sliceCoreAddress = "0x21da1b084175f95285B49b22C018889c45E1820d" // mainnet
const alchemyId = process.env.ALCHEMY_ID
console.log({ alchemyId })
console.log(process.env, "env")
const provider = new ethers.providers.AlchemyProvider("mainnet", alchemyId)

export const sliceCore = new ethers.Contract(
  sliceCoreAddress,
  sliceCoreInterface.abi,
  provider
) as SliceCore

export const safe = new ethers.Contract(
  safeAddress,
  gnosisSafeInterface.abi,
  provider
) as GnosisSafe

export const mteWallet = new ethers.Wallet(String(process.env.PK)) // TODO: Add env variables
