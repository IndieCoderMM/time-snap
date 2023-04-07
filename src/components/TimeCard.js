import React from 'react';
import MenuIcon from '../assets/icon-ellipsis.svg';
import styles from './TimeCard.module.css';

function TimeCard({ title, icon, bgColor }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: 'var(' + bgColor + ')' }}
    >
      <div className={styles.cover}>
        <img src={icon} className={styles.icon} />
      </div>
      <div className={styles.dataBox}>
        <div className={styles.bar}>
          <p className={styles.title}>{title}</p>
          <button type="button" className={styles.menuBtn}>
            <img src={MenuIcon} />
          </button>
        </div>
        <div className={styles.bar}>
          <p className={styles.hour}>10hrs</p>
          <p className={styles.info}>Last Week - 8hrs</p>
        </div>
      </div>
    </div>
  );
}

export default TimeCard;
