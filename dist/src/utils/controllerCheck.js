"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerCheck = void 0;
const initContracts_1 = require("./initContracts");
const controllerCheck = async (slicerId, safeAddress) => {
    if ((await initContracts_1.sliceCore.controller(slicerId)) == safeAddress) {
        throw Error(`Specified safe is not controller of slicer ${slicerId}`);
    }
};
exports.controllerCheck = controllerCheck;
