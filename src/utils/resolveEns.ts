import { ethers } from "ethers"

export const resolveEns = async (address: string) => {
  const alchemyId = "3H_NfTOi34tjHTLUt3ZUw5zVJfkx8NTM"
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
