"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSlicesRequestMessage = exports.isValidAddress = exports.onPrOpenedMessage = exports.baseReviewMessage = void 0;
const ethers_1 = require("ethers");
const core = __importStar(require("@actions/core"));
exports.baseReviewMessage = "Please review your request and submit it again.";
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
const resolveEns = async (address) => {
    const alchemyId = core.getInput("alchemy_api_key");
    const provider = new ethers_1.ethers.providers.AlchemyProvider("mainnet", alchemyId);
    try {
        const resolved = address.substring(address.length - 4) == ".eth"
            ? await provider.resolveName(address)
            : address;
        if (address.substring(address.length - 4) === ".eth" && !resolved) {
            throw Error;
        }
        return resolved;
    }
    catch (error) {
        core.setFailed("ENS not resolved");
    }
};
function isValidAddress(address) {
    return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/);
}
exports.isValidAddress = isValidAddress;
// TODO fix params type
async function onSlicesRequestMessage(splitText) {
    let totalSlices = 0;
    let isSuccess = false;
    const newSplitText = splitText.slice(1);
    const resolvedArray = [];
    for (let i = 0; i < newSplitText.length; i++) {
        const el = newSplitText[i];
        const [address, sliceAmount] = el.split(":");
        if (Number(sliceAmount)) {
            if (isValidAddress(address)) {
                const resolved = await resolveEns(address);
                if (resolved) {
                    totalSlices += Number(sliceAmount);
                    resolvedArray.push("| " + resolved.trim() + " | " + sliceAmount.trim() + " |");
                }
                else {
                    return [
                        "ENS not resolved to address.\n" + exports.baseReviewMessage,
                        isSuccess
                    ];
                }
            }
            else {
                return [
                    "Invalid address or message format.\n" + exports.baseReviewMessage,
                    isSuccess
                ];
            }
        }
        else {
            return [
                "Invalid number of slices or message format.\n" + exports.baseReviewMessage,
                isSuccess
            ];
        }
    }
    isSuccess = true;
    return [
        "### New upcoming slices distribution: \n| Address | Slices |\n| --- | --- |\n" +
            resolvedArray.join(" \n ") +
            "\n \n **Total slices minted:** " +
            String(totalSlices),
        isSuccess
    ];
}
exports.onSlicesRequestMessage = onSlicesRequestMessage;
