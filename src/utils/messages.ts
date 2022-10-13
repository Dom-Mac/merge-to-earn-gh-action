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

export function onRequestMessage(customMessage: string, totalSlices: string) {
  return (
    "### New upcoming slices distribution: \n| Slices | Address |\n| --- | --- |\n" +
    customMessage +
    "\n **Total slices minted:** " +
    totalSlices
  )
}
