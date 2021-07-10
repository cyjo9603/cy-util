function isIterable(value: any): boolean {
  return value !== null && Boolean(value[Symbol.iterator]);
}

export default isIterable;
