import * as core from "@actions/core"
import { ethers } from "ethers"

export const resolveEns = async (address: string) => {
  const alchemyId = core.getInput("alchemy_api_key")
  const provider = new ethers.providers.AlchemyProvider("mainnet", alchemyId)

  const resolved =
    address.substring(address.length - 4) == ".eth"
      ? await provider.resolveName(address)
      : address

  return resolved
}

export const isValidAddress = (address: string) => {
  return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/)
}
