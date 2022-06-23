console.log('hello world');

const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur, 0);
}
