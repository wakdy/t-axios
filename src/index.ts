import { AxiosRequestConfig } from './types'
import XHR from './xhr'
import { buildUrl } from './helps/url'
import { processHeaders } from './helps/headers'
import { transformRequest } from './helps/data'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  XHR(config)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequest(config)
}

function transformURL(config: AxiosRequestConfig) {
  const { url, params } = config
  return buildUrl(url, params)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}

export default axios
