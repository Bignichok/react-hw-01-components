import React from "react";
import styles from "./Description.module.css";

const Description = ({ name, tag, location, avatar }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};
export default Description;
