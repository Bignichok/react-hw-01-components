import React from "react";
import styles from "./StatisticsItem.module.css";
import PropTypes from "prop-types";

const StatisticsItem = ({ label, percentage, color }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: `${color}` }}>
      <span className={styles.label}>{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
