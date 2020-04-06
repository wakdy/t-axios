import { isPainObject } from './util'
export function transformRequest(data: any): any {
  if (isPainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
