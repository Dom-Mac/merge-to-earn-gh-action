"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safe = exports.sliceCore = exports.sliceCoreAddress = void 0;
const ethers_1 = require("ethers");
const SliceCore_1 = require("../abi/SliceCore");
const GnosisSafe_1 = require("../abi/GnosisSafe");
const githubHandler_1 = require("./githubHandler");
exports.sliceCoreAddress = "0x21da1b084175f95285B49b22C018889c45E1820d"; // mainnet
const alchemyId = "3H_NfTOi34tjHTLUt3ZUw5zVJfkx8NTM";
const provider = new ethers_1.ethers.providers.AlchemyProvider("mainnet", alchemyId);
exports.sliceCore = new ethers_1.ethers.Contract(exports.sliceCoreAddress, SliceCore_1.sliceCoreInterface.abi, provider);
exports.safe = new ethers_1.ethers.Contract(githubHandler_1.safeAddress, GnosisSafe_1.gnosisSafeInterface.abi, provider);
// export const mteWallet = new ethers.Wallet(String("process.env.PK")) // TODO: Add env variables
