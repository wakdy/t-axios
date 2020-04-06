export function isDate(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]'
}
export function isPainObject(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object object]'
}
