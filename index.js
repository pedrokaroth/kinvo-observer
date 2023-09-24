const service = require('./src/factory/kinvoFactory')

module.exports.run = async (_, context = {}) => {
  return service[
    context.functionName.split('-').reverse()[0]
  ]()
};