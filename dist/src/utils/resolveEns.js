"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidAddress = exports.resolveEns = void 0;
const ethers_1 = require("ethers");
const resolveEns = async (address) => {
    const alchemyId = process.env.ALCHEMY_ID;
    const provider = new ethers_1.ethers.providers.AlchemyProvider("mainnet", alchemyId);
    const resolved = address.substring(address.length - 4) == ".eth"
        ? await provider.resolveName(address)
        : address;
    console.log(resolved);
    return resolved;
};
exports.resolveEns = resolveEns;
const isValidAddress = (address) => {
    return address.match(/^0x[a-fA-F0-9]{40}$/) || address.match(/.eth$/);
};
exports.isValidAddress = isValidAddress;
