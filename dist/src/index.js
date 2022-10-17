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
exports.init = exports.safeAddress = exports.slicerId = void 0;
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const githubHandler_1 = require("./utils/githubHandler");
const messages_1 = require("./utils/messages");
const fetch_1 = __importDefault(require("./utils/fetch"));
const initContracts_1 = require("./utils/initContracts");
const controllerCheck_1 = require("./utils/controllerCheck");
exports.slicerId = core.getInput("slicer_id");
exports.safeAddress = core.getInput("safe_address");
console.log(exports.safeAddress, "index safe addr");
async function init() {
    try {
        const payload = github.context.payload;
        console.log("payload", payload);
        // Triggers action on comment
        if (payload.comment) {
            console.log("------ comment -----");
            const text = payload.comment.body;
            const requiredText = "### Slice distribution request";
            const splitText = text.split("-");
            let botMessage;
            const commentPayload = payload; // type casting
            if (splitText[0].trim() === requiredText &&
                commentPayload.issue.state == "open") {
                const author = commentPayload.issue.user.login;
                const comments = await (0, fetch_1.default)(commentPayload.issue.comments_url);
                const firstBotComment = comments.find((el) => el.user.login === "github-actions[bot]" &&
                    el.body.includes(`### 👋 Gm @${author}`));
                // Check if comment's user is the PR owner
                if (commentPayload.comment.user.id === commentPayload.issue.user.id) {
                    // Set bot message to fire in create comment
                    // m is defined based on success
                    const [m, success, totalSlices] = await (0, messages_1.onSlicesRequestMessage)(exports.slicerId, splitText);
                    botMessage = m;
                    // TODO: Add type checks on addresses and sliceAmounts
                    // Edit first bot comment
                    if (success) {
                        const newFirstMessage = (0, messages_1.onPrOpenedMessage)(author, exports.slicerId, totalSlices) +
                            "\n\n --- \n\n" +
                            botMessage;
                        // If there is a pinned comment
                        if (firstBotComment) {
                            (0, githubHandler_1.editComment)(firstBotComment.id, newFirstMessage);
                        }
                        else {
                            await (0, controllerCheck_1.controllerCheck)(exports.slicerId, exports.safeAddress);
                            (0, githubHandler_1.createComment)(commentPayload.issue.number, newFirstMessage);
                        }
                    }
                }
                else {
                    botMessage =
                        "User not authorized, only the PR owner can request slice distributions";
                }
                if (firstBotComment ||
                    !botMessage.includes("### Upcoming slice distribution:")) {
                    (0, githubHandler_1.createComment)(commentPayload.issue.number, botMessage);
                }
            }
        }
        else {
            await (0, controllerCheck_1.controllerCheck)(exports.slicerId, exports.safeAddress);
            // Triggers respectively the action on merge or the one on PR opened
            const prPayload = payload;
            if (prPayload.action === "opened") {
                const totalSlices = Number(await initContracts_1.sliceCore.totalSupply(exports.slicerId));
                const author = prPayload.pull_request.user.login;
                (0, githubHandler_1.createComment)(prPayload.pull_request.number, (0, messages_1.onPrOpenedMessage)(author, exports.slicerId, totalSlices));
            }
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
exports.init = init;
init();
