// npm dependencies
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useState } from "react";

// components
import Login from "./components/Login";
import Search from "./components/Search";

// css
import "./css/styles.css";

// Constants
import { Constants } from "./Constants";

const allConstants = Constants();

// link and auth token set up
const httpLink = createHttpLink({
  uri: allConstants.GRAPHQL_URL,
});

const authLink = setContext((parent, context) => {
  console.log("parent", parent, " and context ", context);

  // adding authorization headers to current context
  return {
    ...context,
    headers: {
      authorization: localStorage.getItem("AUTH_TOKEN") || "",
    },
  };
});

// initialize the Apollo Client
const client = new ApolloClient({
  // order is important
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [tokenReceived, setTokenReceived] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState({
    showNotification: false,
    notificationMessage: "",
    notificationType: "",
    notifyId: "",
  });

  const onTokenReceiptHandler = (received) => {
    setTokenReceived(received);
  };

  const onNotify = (notifyDetails) => {
    console.log("Details received", notifyDetails);
    setNotificationDetails({ ...notificationDetails, ...notifyDetails });
  };

  return (
    <ApolloProvider client={client}>
      <header className="padding-1rem">Simple Book Search</header>
      <main>
        {!tokenReceived ? (
          <Login onTokenReceipt={onTokenReceiptHandler} onNotify={onNotify} />
        ) : (
          <Search />
        )}
      </main>
      <footer />
    </ApolloProvider>
  );
}
