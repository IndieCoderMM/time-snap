import React from 'react';
import Profile from './Profile';
import TimeGrid from './TimeGrid';
import styles from './Home.module.css';

function Home({ data }) {
  return (
    <div className={styles.container}>
      <Profile />
      <TimeGrid data={data} />
    </div>
  );
}

export default Home;
