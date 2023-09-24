const KinvoIntegration = require('../integration/KinvoIntegration')
const KinvoService = require('../service/KinvoService')
const Sqs = require('../aws/Sqs')

const service = new KinvoService({
  sqs: new Sqs(),
  kinvo: new KinvoIntegration()
})

module.exports = service