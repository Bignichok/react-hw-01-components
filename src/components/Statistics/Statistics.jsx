import React from "react";
import styles from "./Statistics.module.css";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import randomRgbColor from "../../randomRgbColor.js";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  const statisticsElements = stats.map((el) => {
    const color = randomRgbColor();
    return (
      <StatisticsItem
        key={el.id}
        label={el.label}
        percentage={el.percentage}
        color={color}
      />
    );
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statisticsElements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
