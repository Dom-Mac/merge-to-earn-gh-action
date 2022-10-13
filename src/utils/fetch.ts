import { HttpClient, HttpClientResponse } from "@actions/http-client"

export default async function fetch(url: string) {
  const _http = new HttpClient("http-client")
  const res: HttpClientResponse = await _http.get(url)

  return res
}
