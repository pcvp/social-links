import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { client } from "./lib/apollo";
import { auth0Domain, auth0ClientId } from "./lib/auth0";

import "./styles/global.css";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <ApolloProvider client={client}>
      <Auth0Provider
        domain={auth0Domain}
        clientId={auth0ClientId}
        redirectUri={window.location.origin + "/profile"}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Auth0Provider>
    </ApolloProvider>
  );
}

export default App;
