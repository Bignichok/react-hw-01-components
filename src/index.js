import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//data
import user from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friendsData from "./db/friends.json";
import transactionData from "./db/transaction-data.json";

ReactDOM.render(
  <React.StrictMode>
    <App
      user={user}
      stats={statisticalData}
      friends={friendsData}
      transactionData={transactionData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
