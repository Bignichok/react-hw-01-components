import React from "react";
import styles from "./FriendList.module.css";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsList = ({ friends }) => {
  const friendsListElements = friends.map((friend) => {
    return (
      <FriendsListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    );
  });
  return <ul className={styles.friendsList}>{friendsListElements}</ul>;
};

export default FriendsList;
