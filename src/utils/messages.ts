import { ethers } from "ethers"
import * as core from "@actions/core"

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
  } catch (err) {}
}

export function isValidAddress(address: string) {
  return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/)
}

// TODO fix params type
export async function onRequestMessage(splitText: any) {
  let totalSlices = 0
  // custom message defines the slices | address table
  const newSplitText = splitText.slice(1)

  const resolvedArray = []
  for (let i = 0; i < newSplitText.length; i++) {
    const el: string = newSplitText[i]
    const [address, sliceAmount] = el.split(":")
    if (Number(sliceAmount) && isValidAddress(address)) {
      const resolved = await resolveEns(address)
      totalSlices += Number(sliceAmount)
      resolvedArray.push(
        "| " + resolved?.trim() + " | " + sliceAmount.trim() + " |"
      )
    }
  }

  return (
    "### New upcoming slices distribution: \n| Address | Slices |\n| --- | --- |\n" +
    resolvedArray.join(" \n ") +
    "\n \n **Total slices minted:** " +
    String(totalSlices)
  )
}
