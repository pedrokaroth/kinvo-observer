const { default: axios } = require("axios")

class KinvoIntegration {
  /**
   * @type {import("axios").AxiosInstance}
   */
  #axios

  constructor() {
    this.#axios = new axios.create({
      baseURL: 'https://k2c-api.kinvo.com.br'
    })

    this.#axios.interceptors.request.use(
      this.#authenticate.bind(this)
    )
  }

  async PortifolioAssets() {
    return this.#axios.get('/v2/consolidation/portfolios/1227175/assets')
      .then(r => r.data.data)
      .catch(_ => [])
  }

  /**
   * Authenticate request
   * @param {import("axios").AxiosRequestConfig} req
   */
  async #authenticate(req) {
    if (!req.headers.Authorization && !req.url.includes('login')) {
      const token = await this.#getAccessToken()

      this.#axios.defaults.headers.common.Authorization = token

      req.headers.Authorization = token
    }


    return req
  }


  /**
   * Return formatted access token
   * @returns {Promise<String>} access token
   */
  async #getAccessToken() {
    const credentials = JSON.parse(process.env.KINVO_AUTH)

    const accessToken = await this.#axios.post('/v4/auth/login', credentials)
      .then(r => r.data.data.accessToken).catch(_ => '')

    return `Bearer ${accessToken}`
  }
}

module.exports = KinvoIntegration