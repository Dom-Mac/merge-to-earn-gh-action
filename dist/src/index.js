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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const githubHandler_1 = require("./utils/githubHandler");
const messages_1 = require("./utils/messages");
const fetch_1 = __importDefault(require("./utils/fetch"));
async function init() {
    try {
        const payload = github.context.payload;
        const slicer = core.getInput("slicer");
        console.log("payload", payload);
        // Triggers action on comment
        if (payload.comment) {
            const text = payload.comment.body;
            const requiredText = "### Contributor slices request";
            const splitText = text.split("-");
            let botMessage;
            if (splitText[0].trim() === requiredText) {
                const commentPayload = payload; // type casting
                // Check if comment's user is the PR owner
                if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
                    // Set bot message to fire in create comment
                    // m is defined based on success
                    const [m, success] = await (0, messages_1.onSlicesRequestMessage)(splitText);
                    botMessage = m;
                    // TODO: Add type checks on addresses and sliceAmounts
                    // Edit first bot comment
                    if (success) {
                        const comments = await (0, fetch_1.default)(commentPayload.issue.comments_url);
                        const firstBotComment = comments.filter((el) => el.user.login === "github-actions[bot]" &&
                            el.body.includes("### Hi Anon"))[0];
                        const newFirstMessage = (0, messages_1.onPrOpenedMessage)(slicer) + "\n" + botMessage;
                        (0, githubHandler_1.editComment)(firstBotComment.id, newFirstMessage);
                    }
                }
                else {
                    botMessage =
                        "User not authorized, only the PR owner can request slices";
                }
                (0, githubHandler_1.createComment)(commentPayload.issue.number, botMessage);
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
