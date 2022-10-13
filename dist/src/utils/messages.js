"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRequestMessage = exports.onPrOpenedMessage = void 0;
function onPrOpenedMessage(slicer) {
    return `### Hi Anon 
  This repository adopts a **merge to earn** mechanic and is represented by slicer: ${slicer}
  On a successful merge a defined number of **slices**, representing ownership over slicer's incomes and donations, will be minted to you, and funds are claimable trough [slice.so](https://slice.so) interface.
  
  To request slices please copy and paste the following message in comments and only define you address and the desidered amount of slices.
  
  \`\`\`
  ### Contributor slices request
  - youraddress.eth:3000
  - another.address.eth:2000
  \`\`\`
  `;
}
exports.onPrOpenedMessage = onPrOpenedMessage;
// TODO fix params type
function onRequestMessage(splitText) {
    let totalSlices = 0;
    // custom message defines the slices | address table
    const customMessage = splitText
        .slice(1)
        // TODO fix type
        .map((el) => {
        const [address, sliceAmount] = el.split(":");
        totalSlices += Number(sliceAmount);
        return "| " + address.trim() + " | " + sliceAmount.trim() + " |";
    })
        .join(" \n ");
    return ("### New upcoming slices distribution: \n| Address | Slices |\n| --- | --- |\n" +
        customMessage +
        "\n \n **Total slices minted:** " +
        String(totalSlices));
}
exports.onRequestMessage = onRequestMessage;
