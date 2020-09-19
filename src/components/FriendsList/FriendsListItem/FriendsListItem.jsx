import React from "react";
import styles from "./FriendsListItem.module.css";
import PropTypes from "prop-types";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  //   const isOnlineClasses = [styles.status, isOnline ? styles.online : styles.offline];
  const isOnlineClasses = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      {/* <span className={isOnlineClasses.join(" ")}></span> */}
      <span className={isOnlineClasses}></span>
      <img className={styles.avatar} src={avatar} alt="" width="60" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

FriendsListItem.defaultProps = {
  name: "name",
  avatar:
    "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg",
  isOnline: false,
};

export default FriendsListItem;
