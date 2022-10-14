import { ethers } from "ethers"
import * as core from "@actions/core"

export const baseReviewMessage =
  "Please review your request and submit it again."

export function onPrOpenedMessage(slicer: string) {
  return `### Hi Anon 
  This repository adopts a **merge to earn** mechanic and is represented by slicer: ${slicer}
  On a successful merge a defined number of **slices**, representing ownership over slicer's incomes and donations, will be minted to you, and funds are claimable trough [slice.so](https://slice.so) interface.
  
  To request slices please copy and paste the following message in comments and only define you address and the desidered amount of slices.
  
  \`\`\`
  ### Contributor slices request
  - youraddress.eth:3000
  - another.address.eth:2000
  \`\`\`
  `
}

const resolveEns = async (address: string) => {
  const alchemyId = core.getInput("alchemy_api_key")
  const provider = new ethers.providers.AlchemyProvider("mainnet", alchemyId)

  try {
    const resolved =
      address.substring(address.length - 4) == ".eth"
        ? await provider.resolveName(address)
        : address
    if (address.substring(address.length - 4) === ".eth" && !resolved) {
      throw Error
    }
    return resolved
  } catch (error) {
    core.setFailed("ENS not resolved")
  }
}

export function isValidAddress(address: string) {
  return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/)
}

// TODO fix params type
export async function onSlicesRequestMessage(
  splitText: any
): Promise<[string, boolean]> {
  let totalSlices = 0
  let isSuccess = false
  // custom message defines the slices | address table
  const newSplitText = splitText.slice(1)
  const resolvedArray = []

  for (let i = 0; i < newSplitText.length; i++) {
    const el: string = newSplitText[i]
    const [address, sliceAmount] = el.split(":")
    if (Number(sliceAmount)) {
      if (isValidAddress(address)) {
        const resolved = await resolveEns(address)
        if (resolved) {
          totalSlices += Number(sliceAmount)
          resolvedArray.push(
            "| " + resolved.trim() + " | " + sliceAmount.trim() + " |"
          )
        } else {
          return [
            "ENS not resolved to address.\n" + baseReviewMessage,
            isSuccess
          ]
        }
      } else {
        return [
          "Invalid address or message format.\n" + baseReviewMessage,
          isSuccess
        ]
      }
    } else {
      return [
        "Invalid number of slices or message format.\n" + baseReviewMessage,
        isSuccess
      ]
    }
  }
  isSuccess = true

  return [
    "### New upcoming slices distribution: \n| Address | Slices |\n| --- | --- |\n" +
      resolvedArray.join(" \n ") +
      "\n \n **Total slices minted:** " +
      String(totalSlices),
    isSuccess
  ]
}
