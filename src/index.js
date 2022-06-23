console.log('hello world');
import './index.css'

const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur, 0);
}
