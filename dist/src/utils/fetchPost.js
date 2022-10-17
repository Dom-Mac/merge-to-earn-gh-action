"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = require("@actions/http-client");
async function fetchPost(url, data) {
    const _http = new http_client_1.HttpClient("http-client");
    const res = await _http.postJson(url, data);
    return res.result;
}
exports.default = fetchPost;
