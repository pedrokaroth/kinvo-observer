# Receiving database events from an insert

Project responsible for searching for my user's information on Kinvo and saving it in my applications

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
sls invoke -f get:products:local
```

Which should result in response similar to the following:

```json
[   
  {
    "$metadata": {
      "httpStatusCode": 200,
      "requestId": "55846070-f4e1-5d27-af03-3dfa77edbacd",
      "attempts": 1,
      "totalRetryDelay": 0
    },
    "MD5OfMessageBody": "e9f4dd4dfce6953d0e1a1f47e0544ba1",
    "MessageId": "7edda039-92ee-4941-ba4b-6942fb4708a3"
  }
]
```

### Local development

You can invoke your function locally by using the following command:

```bash
npm get:products:local
```

Which should result in response similar to the following:

```
[   
  {
    "$metadata": {
      "httpStatusCode": 200,
      "requestId": "55846070-f4e1-5d27-af03-3dfa77edbacd",
      "attempts": 1,
      "totalRetryDelay": 0
    },
    "MD5OfMessageBody": "e9f4dd4dfce6953d0e1a1f47e0544ba1",
    "MessageId": "7edda039-92ee-4941-ba4b-6942fb4708a3"
  }
]
```
