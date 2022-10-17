import { ethers } from "ethers"

export const resolveEns = async (address: string) => {
  const alchemyId = process.env.ALCHEMY_ID
  const provider = new ethers.providers.AlchemyProvider("mainnet", alchemyId)

  const resolved =
    address.substring(address.length - 4) == ".eth"
      ? await provider.resolveName(address)
      : address
  console.log(resolved)
  return resolved
}

export const isValidAddress = (address: string) => {
  return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/)
}
