import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { client } from "./lib/apollo";

import "./styles/global.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
