"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSlicesRequestMessage = exports.onPrOpenedMessage = exports.baseReviewMessage = void 0;
const formatNumber_1 = __importDefault(require("./formatNumber"));
const initContracts_1 = require("./initContracts");
const resolveEns_1 = require("./resolveEns");
exports.baseReviewMessage = "Please review your request and submit it again.";
function onPrOpenedMessage(author, slicerId, totalSlices) {
    const today = new Date();
    return `### 👋 Gm @${author}

  This repository uses [Merge to earn](...) to reward contributors, and is represented by [Slicer #${slicerId}](slice.so/slicer/${slicerId}).
  
  When merging a pull request, contributors receive an agreed number of **slices** representing ownership over the project and its earnings. Funds will then be claimable on [slice.so](slice.so).
  
  To request slices, comment with the following message by specifying the **Ethereum addresses** of the contributors involved and the **desired amount of slices** for each.
  
  \`\`\`
  ### Slice distribution request
  
  - contributor.eth : 1000
  - 0x... : 500
  - reviewer.eth : 50
  \`\`\`
  
  > Total slices on ${today.toDateString()}: ${(0, formatNumber_1.default)(totalSlices)}
  `;
}
exports.onPrOpenedMessage = onPrOpenedMessage;
// TODO fix params type
async function onSlicesRequestMessage(slicerId, splitText) {
    let slicesToBeMinted = 0;
    let isSuccess = false;
    let totalSlices = 0;
    const newSplitText = splitText.slice(1);
    const resolvedArray = [];
    for (let i = 0; i < newSplitText.length; i++) {
        const el = newSplitText[i];
        const [address, sliceAmount] = el.split(":");
        if (Number(sliceAmount)) {
            if ((0, resolveEns_1.isValidAddress)(address)) {
                const resolved = await (0, resolveEns_1.resolveEns)(address);
                if (resolved) {
                    slicesToBeMinted += Number(sliceAmount);
                    resolvedArray.push("| " + resolved.trim() + " | " + sliceAmount.trim() + " |");
                }
                else {
                    return [
                        "ENS not resolved to address.\n" + exports.baseReviewMessage,
                        isSuccess,
                        totalSlices
                    ];
                }
            }
            else {
                return [
                    "Invalid address or message format.\n" + exports.baseReviewMessage,
                    isSuccess,
                    totalSlices
                ];
            }
        }
        else {
            return [
                "Invalid number of slices or message format.\n" + exports.baseReviewMessage,
                isSuccess,
                totalSlices
            ];
        }
    }
    isSuccess = true;
    totalSlices = Number(await initContracts_1.sliceCore.totalSupply(slicerId));
    return [
        "### Upcoming slice distribution: \n| Address | Slices |\n| --- | --- |\n" +
            resolvedArray.join(" \n ") +
            "\n \n **Slices to be minted: **" +
            String(slicesToBeMinted) +
            `(${Math.floor((slicesToBeMinted / (totalSlices + slicesToBeMinted)) * 100000) / 1000}% of ${(0, formatNumber_1.default)(totalSlices + slicesToBeMinted)} new total slices)`,
        isSuccess,
        totalSlices
    ];
}
exports.onSlicesRequestMessage = onSlicesRequestMessage;
