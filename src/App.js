import React from "react";
import "./App.css";

import Profile from "./components/Profile/Profile.jsx";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App({ user, stats, friends, transactionData }) {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory transactionData={transactionData} />
    </div>
  );
}

export default App;
