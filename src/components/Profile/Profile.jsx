import React from "react";
import PropTypes from "prop-types";
import Description from "./Description/Description";
import styles from "./Profile.module.css";
import Stats from "./Stats/Stats";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </div>
  );
};

Profile.defaultProps = {
  name: "name",
  tag: "",
  location: "Planet Earth",
  avatar:
    "https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
