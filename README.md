# react-app-simple-book-search-graphql

A Simple Book Search Application using [React JS](https://react.dev/learn), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs) with [AWS Lambda](https://aws.amazon.com/lambda/) and [MongoDB](https://docs.mongodb.com/). To connect with the Backend [GraphQL](https://graphql.org/) Server [Apollo Client](https://www.apollographql.com/docs/react/) is used while [Apollo Server](https://www.apollographql.com/docs/apollo-server/) is used to implement the Server.

This application uses **component oriented UI** creation paradigm. All components are written in [JSX](https://react.dev/learn/writing-markup-with-jsx) and ES6 style and are combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

[Babel](https://babeljs.io/docs) is used to _transpile_ all [JSX](https://react.dev/learn/writing-markup-with-jsx) code to vanilla JavaScript. For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

Back end is implemented using [Node JS](https://nodejs.org/en/docs) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

**This Application uses standalone GraphQL Server. For Backend Deployment with AWS Lambda details please check [aws-lambda branch](https://github.com/anijitsao/simple-apollo-server-graphql/tree/aws-lambda).**

## Features

1. Code is rewritten with latest version of [React JS](https://react.dev/learn) and [Node JS](https://nodejs.org/en/docs/).
2. Latest features of JavaScript i.e. **ESNext** is used.

<br/>

<ol start=3>
 <li> This is Simple Book Search Application. It is a <b>CRUD</b> application. </li>
 <li> It is a Full Stack Application with <b>Standalone GraphQL Server</b>. For the <b>Backend with AWS Lambda</b> please check the <a href="https://github.com/anijitsao/simple-apollo-server-graphql/tree/aws-lambda">aws-lambda branch</a>.</li>
</ol>

5. All the book details, authors and publication detils are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This example uses a _free/ shared_ account. **So Please use it wisely**.

<ol start=6>
 <li>Login feature is added. </li>
 <li>Error will be shown if the credentials are not correct or Network is <i>not</i> present.</li>
 <li> <b>Session tracking</b> is supported using <a href="https://https://jwt.io/">JSON Web Tokens (JWT).</a>
 These tokens are saved into <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">LocalStorage</a>.</li>
 <li> To implement the features of <a href="https://graphql.org/">GraphQL</a> like <b>Queries, Mutations</b> in <i>Client</i> side <a href="https://www.apollographql.com/docs/react/">Apollo Client</a> is used. On the otherhand, <a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a> is used to implement the same in <b>Server</b> side.</li>
</ol>

10. _for simplicity passwords are not encrypted_

<ol start="11">
  
  <li> For the <i>Schema</i> generation <b>Type Definitions</b> are added. <b>Queries</b> are used for the <i>Reading</i> operations while <b>Mutations</b> are added for <i>Mutable</i> operations.
</ol>

## Installation

Clone the repository:

```bash
$ git clone https://github.com/anijitsao/react-app-simple-book-search-graphql.git
```

Navigate inside the directory:

```bash
$ cd react-app-simple-book-search-graphql
```

Install all the necessary dependecies and run the **client side** of the application

```bash
$ npm install

# To serve the application we use a npm module named http-server
$ npm run client-start
```

Now open **Another Terminal** and navigate to the same directory and run the **GraphQL Server**

```bash
$ cd /path/to/react-app-simple-book-search-graphql

# Run the GraphQL Server
$ npm run server-start
```

### Login to book search

---

1. Open web browser and type`http://localhost:8080` in the address bar to load the application.
2. Now login with **Test users**.

**Test users**

| Username | Password |
| -------- | -------- |
| admin    | admin123 |

_tested with latest versions of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)_

However, to _test_ [GraphQL](https://graphql.org/) API you can use any _supported_ Client like [Apollo Sandbox](https://studio.apollographql.com/sandbox/explorer/?_gl=1%2Abuieem%2A_ga%2AMjAyNTg2NTkxOC4xNjc5OTg3MzI4%2A_ga_0BGG5V2W2K%2AMTY3OTk4NzMyOC4xLjEuMTY3OTk4NzM0NS4wLjAuMA..) with the `url` and _HTTP Verbs_ as shown in Terminal.

## API Listing

API listing is given below, -

All APIs have common endpoint as following.

**POST** /url-of-the-deployed-service/graphql (for `localhost` it will be `http://localhost:4000/graphql`)

Following _Queries_ use the same URL mentioned above

```javascript
query CreateTokenQuery{
  // these are the only possible username and password
  createToken(username: "admin", password: "admin123") {
    token
  }
}
```

```javascript
query HelloQuery {
  hello
}
```

```javascript
query FindBooksQuery {
  findBooks {
    _id
    name
    published
  }
}
```

```javascript
query FindAllAuthors{
  findAuthors {
    _id
    firstName
    lastName
  }
}
```

Following _Mutations_ have the same URL mentioned above

```javascript
mutation ModifyCount {
  getCount(count: 20)
}
```

```javascript
mutation AddBookMutation {
  addBook(name: "You Don't Know JS") {
    _id
    name
  }
}
```

```javascript
mutation DeleteBookMutation {
  deleteBook(_id: "id-of-the-book-to-delete")
}
```

```javascript
mutation UpdateBookMutation($updateId: ID!, $bookData: UpdataBookParams!) {
  updateBook(_id: $updateId, updateBookData: $bookData)
}

// variables
{
  "updateId": "id-of-the-book-to-update",
  "bookData": {
   "name": "You Don't Know ES6"
  }
}
```

Following **Author** related _Mutations_ have the same URL mentioned above

```javascript
mutation AddAuthorMutation {
  addAuthor(firstName: "Agatha", lastName: "Christie"){
    _id
    firstName
  }
}
```

```javascript
mutation DeleteAuthorMutation {
  deleteAuthor(_id: "id-of-the-author-to-delete")
}
```

```javascript
mutation UpdateAuthorMutation(
  $updateId: ID!
  $authorData: UpdataAuthorParams!
) {
  updateAuthor(_id: $updateId, updateAuthorData: $authorData)
}

// variables
{
  "updateId": "id-of-the-author-to-update",
  "authorData": {
   "firstName": "Agatha",
   "lastName": "Christie",
   "country": "United Kingdom"
  }
}
```

## Screenshots

Some screens of the application is given below for better understanding.

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Login Screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Login screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="Login screen"/> 
</p>
 
 <p> If credentials are not correct <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="Entering credentials screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="Entering credentials screen"/> 
</p>

<p> After submitting credentials and Search a book <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="After submitting credentials screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="After submitting credentials screen"/> 
</p>

<p> Add a Book <br/> 
 <img src="screenshots/desktop 4.png" width="590px" title="If credentials are not correct screen"/>
 <img src="screenshots/mobile 4.png" width="190px" title="If credentials are not correct screen"/> 
</p>

<p> Edit a Book <br/> 
 <img src="screenshots/desktop 5.png" width="590px" title="After a successful login screen"/>
 <img src="screenshots/mobile 5.png" width="190px" title="After a successful login screen"/> 
</p>

<p> Delete a Book <br/> 
 <img src="screenshots/desktop 6.png" width="590px" title="When a new user joins screen"/>
 <img src="screenshots/mobile 6.png" width="190px" title="When a new user joins screen"/> 
</p>
