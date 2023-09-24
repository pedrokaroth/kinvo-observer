const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs")

class Sqs {
  #client

  constructor() {
    this.#client = new SQSClient()
  }

  async sendMessage({ message }) {
    return this.#client.send(new SendMessageCommand({
      MessageBody: JSON.stringify(message),
      QueueUrl: process.env.SQS_QUEUE,
    })).then(r => r).catch(e => e)
  }
}

module.exports = Sqs