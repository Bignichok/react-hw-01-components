import React from "react";
import styles from "./FriendList.module.css";
import FriendsListItem from "./FriendsListItem/FriendsListItem";

const FriendsList = ({ friends }) => {
  return !!friends &&  <ul className={styles.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) =>
        (<FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline} />
        ))}
    </ul>;
}


export default FriendsList;
