# simple-apollo-server-graphql-lambda
Simple Apollo Server with Node JS and AWS Lambda. 
This example demonstrates how to deploy a [NodeJS](https://nodejs.org/en/docs/) function running on [AWS Lambda](https://aws.amazon.com/lambda/) using the traditional [Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/intro) Framework. The deployed functions work with [MongoDB Atlas](https://www.mongodb.com/docs/atlas/).

This Example works with [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) events. For faster response with the APIs [Redis](https://redis.io/) *caching* is used. For *session tracking* [JSON Web Token (JWT)](https://jwt.io/) is used.

All *logs* for the function is kept in [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/) i.e *persistent*.

To use the code in this example you **must** have an valid [AWS account](https://aws.amazon.com/account/) and necessary [AWS IAM](https://aws.amazon.com/iam/) roles and programmatic access to an user. You **must** have a [MongoDB Atlas](https://www.mongodb.com/docs/atlas/) account as well as an [AWS EC2](https://aws.amazon.com/ec2/) instance should be installed with [Redis](https://redis.io/).

[User Sticker App](https://github.com/anijitsahu/react-app-simple-user-sticker-app) is related to this application.

## Features
1. [AWS Lambda](https://aws.amazon.com/lambda/) function using [NodeJS](https://nodejs.org/en/docs/)
2. Function is using latest version of [AWS SDK JavaScript v3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html) with all **ES6+**  syntaxes like Promises, `async/await`

<ol start="3">
  <li>
     Function are deployed using <a href="https://www.serverless.com/framework/docs/providers/aws/guide/intro">Serverless</a> Framework.
  </li>  
  <li>
    <code>serverless.json</code> is used for deployment configuration instead of <code>serverless.yml</code>.
  </li>  
  <li>
    All the deployment is created in <a href="https://aws.amazon.com/s3/">AWS S3</a> to store the <code>.zip</code> of the function code and <a href="https://aws.amazon.com/cloudformation/">AWS CloudFormation</a> Stack.
  </li>  
</ol>  


6. For **session tracking** [JWT](https://jwt.io/) is used.
7. [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) are using [AWS API GateWay](https://aws.amazon.com/api-gateway/)

<ol start="8">
  <li> All data is saved in <a href="https://www.mongodb.com/docs/atlas/">MongoDB Atlas</a> i.e. <i>persistent</i>
  <li> <strong>Caching</strong> is used for faster response in the APIs. <a href="https://redis.io/">Redis</a> is used for that purpose</li> 
  <li> This APIs can also be consumed by any <b>Frontend Application</b>.</li> 
</ol>  

11. [NPM](https://www.npmjs.com/) dependencies are used for various purposes.
12. **Custom Headers** are added with the response for *obvious security* reasons.

## Usage

First clone the repo

```bash
$ git clone git@github.com:anijitsahu/simple-apollo-server-graphql-lambda.git
```
Install all the necessary dependencies by going inside the directory

```bash
$ cd simple-apollo-server-graphql-lambda
$ npm install
```


### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed functions / resolvers. 

However, to call using `httpApi/ GraphQL API` you can use any GraphQl Client like [Altair GraphQL Client](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja?hl=en) with the `url` and *HTTP Verbs* as shown in Terminal after using `serverless deploy`.

## API Listing

It should call necessary GraphQL APIs. Some of the API listing is given below

**GET** /url-of-the-deployed-lambda/graphql

```javascript
query helloQuery {
  hello
}
```

