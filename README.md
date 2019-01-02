# Serverless Lighthouse for AWS Lambda

Allows you to run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) from AWS Lambda using [Serverless Headless Chrome](https://github.com/adieuadieu/serverless-chrome/tree/master/packages/serverless-plugin).

## Prerequisites

*  You are using node 8.10.0 (AWS Lambda does not support anything more recent at time of writing)
* You have [yarn](https://yarnpkg.com/) installed
* [serverless](https://serverless.com/framework/docs/getting-started/) version 1.35.1 installed.
* AWS [credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) configured.

## Getting Started

```
git clone https://github.com/rhino88/serverless-aws-nodejs-lighthouse.git
cd serverless-aws-nodejs-lighthouse
yarn
# deploys the function to AWS
serverless deploy
```

## Usage

```
serverless invoke -f lighthouse -l --data '{"target":"https://www.google.com/"}'
```