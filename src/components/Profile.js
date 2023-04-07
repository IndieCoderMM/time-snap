import React from 'react';
import styles from './Profile.module.css';
import Birdie from '../assets/birdie.png';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileBar}>
        <img src={Birdie} className={styles.picture} />
        <p className={styles.name}>Hein Thant</p>
      </div>
      <div className={styles.navBar}>
        <button className={styles.btn} type="button">
          Daily
        </button>
        <button className={styles.btn} type="button">
          Weekly
        </button>
        <button className={styles.btn} type="button">
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
