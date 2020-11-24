import React from "react";
import styles from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import randomRgbColor from "../../randomRgbColor.js";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return !!stats.length && 
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          const color = randomRgbColor();
            return (
              <StatisticsItem
                key={id}
                label={label}
                percentage={percentage}
                color={color}
              />
            );
          })}</ul>
    </section>
  
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
