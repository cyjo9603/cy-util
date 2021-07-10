function isPromise(value: any): boolean {
  return (
    Boolean(value) &&
    ['object', 'function'].includes(typeof value) &&
    typeof value.then === 'function'
  );
}

export default isPromise;
