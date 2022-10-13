"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = require("@actions/http-client");
async function fetch(url) {
    const _http = new http_client_1.HttpClient("http-client");
    const res = await _http.get(url);
    return await res.readBody();
}
exports.default = fetch;
