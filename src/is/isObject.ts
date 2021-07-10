function isObject(value: any): boolean {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}

export default isObject;
