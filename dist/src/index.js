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
const githubHandler_1 = require("./utils/githubHandler");
const messages_1 = require("./utils/messages");
async function init() {
    try {
        const payload = github.context.payload;
        const slicer = core.getInput("slicer");
        console.log("payload", payload);
        // Triggers action on comment
        if (payload.comment) {
            console.log("---- comment action ----");
            const text = payload.comment.body;
            const requiredText = "### Contributor slices request";
            const splitText = text.split("-");
            let message;
            if (splitText[0].trim() === requiredText) {
                console.log("---- required text ----");
                const commentPayload = payload; // type casting
                // Check if the comment user is the pr owner
                if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
                    console.log("---- required text user authorized ----");
                    let totalSlices = 0;
                    // TODO: Add checks on addresses and sliceAmounts types
                    // custom message defines the slices | address table
                    const customMessage = splitText
                        .slice(1)
                        .map((el) => {
                        const [address, sliceAmount] = el.split(":");
                        totalSlices += Number(sliceAmount);
                        return "| " + sliceAmount.trim() + " | " + address.trim() + " |";
                    })
                        .join(" \n ");
                    message = (0, messages_1.onRequestMessage)(customMessage, String(totalSlices));
                }
                else {
                    console.log("---- required text user not authorized ----");
                    message = "User not authorized, only the PR owner can request slices";
                }
                (0, githubHandler_1.createComment)(commentPayload.issue.number, message);
            }
        }
        else {
            // Triggers respectively the action on merge or the one on PR opened
            const prPayload = payload;
            if (prPayload.action === "opened") {
                (0, githubHandler_1.createComment)(prPayload.pull_request.number, (0, messages_1.onPrOpenedMessage)(slicer));
            }
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
}
exports.default = init;
init();
