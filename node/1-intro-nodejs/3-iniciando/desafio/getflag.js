module.exports = function getFlag(flagName) {
  return process.argv[process.argv.indexOf(flagName) + 1]
}