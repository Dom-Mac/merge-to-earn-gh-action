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
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const utils_1 = require("./utils");
try {
    const payload = github.context.payload;
    // trigger action on comment
    if (payload.comment) {
        const text = payload.comment.body;
        const requiredText = "### Contributor slices request";
        const splitText = text.split("-");
        if (splitText[0].trim() === requiredText) {
            const commentPayload = payload;
            let totalSlices = 0;
            const message = splitText
                .slice(1)
                .map((el) => {
                const [address, sliceAmount] = el.split(":");
                totalSlices += Number(sliceAmount);
                return "| " + sliceAmount.trim() + " | " + address.trim() + " |";
            })
                .join(" \n ");
            (0, utils_1.createComment)(commentPayload.issue.number, "### New upcoming slices distribution: \n| Slices | Address |\n| --- | --- |\n" +
                message +
                "\n **Total slices minted:** " +
                totalSlices);
        }
    }
    else {
        // trigger action on merge or on open
        const prPayload = payload;
        if (prPayload.action === "opened") {
            (0, utils_1.createComment)(prPayload.pull_request.number, "ciao dalla repo on init");
        }
        else {
        }
    }
    console.log("payload", payload);
}
catch (error) {
    core.setFailed(error.message);
}
