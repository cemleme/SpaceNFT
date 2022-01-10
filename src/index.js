import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";
import store from "./store.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="dYs1HPZBZwkTGBMw4ksfWnvpE5BZ6nT13LfPmHuU"
      serverUrl="https://9jwlufwrttxr.usemoralis.com:2053/server"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
