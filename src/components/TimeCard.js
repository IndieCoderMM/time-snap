import React from 'react';
import MenuIcon from '../assets/icon-ellipsis.svg';
import styles from './TimeCard.module.css';

function TimeCard({ title, data, pastText, icon, bgColor }) {
  const formatHour = (hr) => {
    const suffix = hr > 1 ? 'hrs' : 'hr';
    return hr + suffix;
  };
  const currentHr = formatHour(data.current);
  const prevHr = formatHour(data.previous);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: 'var(' + bgColor + ')' }}
    >
      <div className={styles.cover}>
        <img src={icon} className={styles.icon} alt="" />
      </div>
      <div className={styles.dataBox}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <button type="button" className={styles.menuBtn}>
            <img src={MenuIcon} alt="Menu Icon" />
          </button>
        </div>
        <div className={styles.bar}>
          <p className={styles.hour}>{currentHr}</p>
          <p className={styles.info}>
            {pastText} - {prevHr}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
