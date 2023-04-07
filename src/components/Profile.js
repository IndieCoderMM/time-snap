import React from 'react';
import styles from './Profile.module.css';
import Birdie from '../assets/birdie.png';

function Profile({ activeView, changeView }) {
  const activeTabStyle = {
    color: 'white',
  };
  return (
    <div className={styles.container}>
      <div className={styles.profileBar}>
        <img src={Birdie} className={styles.picture} alt="Profile" />
        <div>
          <p className={styles.info}>Report for</p>
          <p className={styles.name}>Hein Thant</p>
        </div>
      </div>
      <div className={styles.navBar}>
        <button
          className={styles.btn}
          style={activeView === 'daily' ? activeTabStyle : null}
          type="button"
          onClick={() => changeView('daily')}
        >
          Daily
        </button>
        <button
          className={styles.btn}
          style={activeView === 'weekly' ? activeTabStyle : null}
          type="button"
          onClick={() => changeView('weekly')}
        >
          Weekly
        </button>
        <button
          className={styles.btn}
          style={activeView === 'monthly' ? activeTabStyle : null}
          type="button"
          onClick={() => changeView('monthly')}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
