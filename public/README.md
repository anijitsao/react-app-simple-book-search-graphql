# react-app-simple-book-search-graphql

A Simple Book Search Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs) with [AWS Lambda](https://aws.amazon.com/lambda/) and [MongoDB](https://docs.mongodb.com/). To connect with the Backend [GraphQL](https://graphql.org/) is used with the framework [Apollo Client](https://www.apollographql.com/docs/react/) 

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs) with [AWS Lambda](https://aws.amazon.com/lambda/) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/) is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

**This Application is closely related to [simple-apollo-server-graphql-lambda](https://github.com/anijitsahu/simple-apollo-server-graphql-lambda). For Backend Deployment details please check [simple-apollo-server-graphql-lambda](https://github.com/anijitsahu/simple-apollo-server-graphql-lambda).**

## Features

1. Code is rewritten with [React JS 18](https://reactjs.org/docs/getting-started.html) and [Node JS 18](https://nodejs.org/en/docs/)
2. Latest features of JavaScript i.e. ES6, ES7, ES8 is used
3. [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
4. ES8 `async/await` is used

<br/>

<ol start=5>
 <li> This is Simple Book Search Application. It is a <b>CRUD</b> application. </li>
 <li> It is a Full Stack Application. This repo contains only the <i>Frontend</i> part. For the <b>Backend</b> please check the <a href="https://github.com/anijitsahu/simple-apollo-server-graphql-lambda">simple-apollo-server-graphql-lambda</a></li>
</ol>

7. All the book details, authors and publication detils are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a _free/ shared_ account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely**

<ol start=8>
 <li>Login feature is added </li>
 <li>Error will be shown if the credentials are not correct or Network is <i>not</i> present</li>
 <li> <b>Session tracking</b> is supported using <a href="https://https://jwt.io/">JSON Web Tokens (JWT)</a>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">LocalStorage</a> is used to save the <a href="https://https://jwt.io/">JSON Web Tokens (JWT)</a></li>
 <li> To implement the features of <a href="https://graphql.org/">GraphQL</a> like <b>Queries, Mutations</b> the framework <a href="https://www.apollographql.com/docs/react/">Apollo Client</a> is used</li>
</ol>

13. _for simplicity passwords are not encrypted_


## Installation

Clone the repository:

```bash
$ git clone https://github.com/anijitsao/react-app-simple-book-search-graphql.git
```

Navigate inside the directory:

```bash
$ cd react-app-simple-book-search-graphql
```

Install all the necessary dependecies and run the application

```bash
$ npm install

# To serve the application we use a npm module named http-server  
$ npm run serve
```

### Login to book search

---

1. Open web browser and type`http://localhost:8080` in the address bar to load the application
2. Now login with username `admin` and password `admin123`

**Test users**

| Username | Password |
| -------- | -------- |
| admin    | admin123 |

_tested with latest versions of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)_

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

