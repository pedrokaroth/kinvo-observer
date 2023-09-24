const Promise = require('bluebird')

class KinvoService {

  /**
   * @type {import('../aws/Sqs')}
   */
  #sqs

  /**
   * @type {import('../integration/KinvoIntegration')}
   */
  #kinvo

  constructor({ sqs, kinvo }) {
    this.#sqs = sqs
    this.#kinvo = kinvo

  }

  /**
   * Get Portifolio assets data
   * @returns {Promise<Array>}
   */
  async UpdatePortfolioAssets() {
    const assets = await this.#kinvo.PortifolioAssets()

    return Promise.map(assets, item =>
      this.#sqs.sendMessage({
        message: {
          type: 'kinvo:PortifolioAssets',
          value: item
        }
      }), { concurrency: 5 })
  }
}

module.exports = KinvoService