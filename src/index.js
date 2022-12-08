import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";

import { StateProvider } from "./state/stateProvider";
import reducer, {
  initialState,
  // init
} from "./state/reducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      reducer={reducer}
      // init={initialState}
    >
      <App />
    </StateProvider>
  </React.StrictMode>
);
