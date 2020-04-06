import { AxiosRequestConfig } from './types';
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, headers } = config;
  const XHR = new XMLHttpRequest();
  XHR.open(method.toUpperCase(), url, true);
  Object.keys(headers).forEach(key => {
    if (data === null && key.toLowerCase() === 'content-type') {
      delete headers[key];
    } else {
      XHR.setRequestHeader(key, headers[key]);
    }
  });
  XHR.send(data);
}
