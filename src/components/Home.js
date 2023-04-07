import React, { useState } from 'react';
import Profile from './Profile';
import TimeGrid from './TimeGrid';
import styles from './Home.module.css';

function Home({ data }) {
  // Daily Weekly Monthly
  const [view, setView] = useState('daily');

  const changeView = (viewMode) => {
    setView(viewMode);
  };

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.logo}>TimeSnap</h1>
      </div>
      <div className={styles.container}>
        <Profile activeView={view} changeView={changeView} />
        <TimeGrid data={data} view={view} />
      </div>
      <div className={styles.footer}>
        <p>Thanks for using TimeSnap to keep track of your valuable time.</p>
        <p>&copy; 2023 TimeSnap. All rights reserved.</p>
      </div>
    </>
  );
}

export default Home;
