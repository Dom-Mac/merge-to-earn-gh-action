"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposeTransaction = void 0;
const ethers_1 = require("ethers");
const githubHandler_1 = require("./githubHandler");
const fetchPost_1 = __importDefault(require("./fetchPost"));
const initContracts_1 = require("./initContracts");
const env = "mainnet";
// const baseUrl = `https://safe-transaction.${env}.gnosis.io`
const baseUrl = `https://safe-transaction-${env}.safe.global/`; // temp endpoint?
const proposeTransaction = async (mints) => {
    try {
        // const resliceData = formatResliceData(mints)
        // const [nonce, safeTxGas] = await getEstimate(resliceData)
        // const transactionHash = await getTransactionHash(
        //   nonce,
        //   safeTxGas,
        //   resliceData
        // )
        // const hashToSign = transactionHash
        // const signature = (
        //   await mteWallet.signMessage(ethers.utils.arrayify(hashToSign))
        // )
        //   .replace(/1b$/, "1f")
        //   .replace(/1c$/, "20")
        // const endpoint = `api/v1/safes/${safeAddress}/multisig-transactions/`
        // const body = {
        //   headers: { "Content-type": "application/json" },
        //   body: JSON.stringify({
        //     to: sliceCoreAddress,
        //     value: 0,
        //     data: resliceData,
        //     operation: 0,
        //     safeTxGas,
        //     baseGas: 0,
        //     gasPrice: 0,
        //     gasToken: null,
        //     refundReceiver: null,
        //     nonce,
        //     contractTransactionHash: transactionHash,
        //     sender: mteWallet.address,
        //     signature,
        //     origin: "Merge to earn"
        //   }),
        //   method: "POST"
        // }
        // const res: any = await fetchPost(baseUrl + endpoint, body)
        // console.log({ res }) // TODO: Check res
        // if (res.status != 201) {
        //   throw Error("Proposal unsuccessful")
        // }
    }
    catch (err) {
        console.log(err);
    }
};
exports.proposeTransaction = proposeTransaction;
const getEstimate = async (data) => {
    const relayUrl = `https://safe-relay.gnosis.io/`; // only mainnet
    const endpoint = `api/v1/safes/${githubHandler_1.safeAddress}/transactions/estimate/`;
    const body = {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            to: initContracts_1.sliceCoreAddress,
            value: 0,
            data,
            operation: 0,
            gasToken: null
        }),
        method: "POST"
    };
    const estimate = await (0, fetchPost_1.default)(relayUrl + endpoint, body); // TODO: Check this works
    console.log({ estimate });
    return [estimate.lastUsedNonce + 1, estimate.safeTxGas];
};
const getTransactionHash = async (nonce, safeTxGas, data) => await initContracts_1.safe.getTransactionHash(initContracts_1.sliceCoreAddress, 0, data, 0, // 0 CALL
safeTxGas, 0, 0, ethers_1.ethers.constants.AddressZero, ethers_1.ethers.constants.AddressZero, nonce);
const formatResliceData = (mints) => {
    let accounts = [];
    let tokenDiffs = [];
    mints.forEach((el) => {
        accounts.push(el.account);
        tokenDiffs.push(el.shares);
    });
    return (ethers_1.ethers.utils
        .keccak256(ethers_1.ethers.utils.toUtf8Bytes("reslice(uint256,address[],int32[])"))
        .slice(0, 10) +
        ethers_1.ethers.utils.defaultAbiCoder
            .encode(["uint256", "address[]", "int32[]"], [githubHandler_1.slicerId, accounts, tokenDiffs])
            .slice(2));
};
// TODO: (future) Add helper to condense multiple reslice tx proposals into a single one
