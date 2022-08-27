// Code References
// https://github.com/dabit3/aws-appsync-react-workshop
// https://www.youtube.com/watch?v=HZUlQ7Z2xHQ

import React from "react";
import { createRoot } from "react-dom/client";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

Amplify.configure(config);

const root = document.querySelector("#root");
createRoot(root).render(
  <AmplifyProvider>
    <Authenticator.Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Authenticator.Provider>
  </AmplifyProvider>
);
