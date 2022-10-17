import { HttpClient, HttpClientResponse } from "@actions/http-client"

export default async function fetchPost(url: string, data: any) {
  const _http = new HttpClient("http-client")
  const res = await _http.postJson(url, data)

  return res.result
}
