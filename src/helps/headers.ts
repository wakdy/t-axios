import { isPainObject } from './util'

function normarlizeHeaders(headers: any, normarlizedName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(key => {
    if (key !== normarlizedName && key.toUpperCase() === normarlizedName.toUpperCase()) {
      headers[normarlizedName] = headers[key]
      delete headers[key]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  if (isPainObject(data)) {
    normarlizeHeaders(headers, 'Content-Type')
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
}
