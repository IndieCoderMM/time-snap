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
    <div className={styles.container}>
      <Profile activeView={view} changeView={changeView} />
      <TimeGrid data={data} view={view} />
    </div>
  );
}

export default Home;
