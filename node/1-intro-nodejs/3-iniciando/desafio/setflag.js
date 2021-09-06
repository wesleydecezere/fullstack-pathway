const getFlag = require('./getFlag');

const flag_names = ['--name', '--gretting']
const flag_values = flag_names.map((flag) => {
  if (flag.slice(0, 2) === '--') {
    return getFlag(flag)
  }
}).filter(value => value !== undefined)

console.log(`Oi ${flag_values[0]}, ${flag_values[1]}`)