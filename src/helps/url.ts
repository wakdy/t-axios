import { isDate, isPainObject } from './util';
type paramsObject = {
  [n: string]: any;
};
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
export function buildUrl(url: string, params: paramsObject = {}): string {
  const parts: string[] = [];
  Object.keys(params).forEach(key => {
    const val = params[key];
    let values = [];
    if (Array.isArray(val)) {
      key = `${key}[]`;
      values = val;
    } else {
      values = [val];
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString();
      } else if (isPainObject(val)) {
        val = JSON.stringify(val);
      }
      parts.push(`${encode(key)}=${encode(val)}`);
    });
  });
  const serialized: string = parts.join('&');
  if (serialized) {
    const index = url.indexOf('#');
    if (index > -1) {
      url = url.slice(0, index);
    }
    url += (url.indexOf('?') > -1 ? '' : '?') + serialized;
  }
  return url;
}
