import React from 'react';
import TimeCard from './TimeCard';
import ExerciseIcon from '../assets/icon-exercise.svg';
import WorkIcon from '../assets/icon-work.svg';
import SocialIcon from '../assets/icon-social.svg';
import StudyIcon from '../assets/icon-study.svg';
import PlayIcon from '../assets/icon-play.svg';
import SelfCareIcon from '../assets/icon-self-care.svg';
import styles from './TimeGrid.module.css';

function TimeGrid({ data, view }) {
  const icons = {
    work: WorkIcon,
    play: PlayIcon,
    study: StudyIcon,
    exercise: ExerciseIcon,
    social: SocialIcon,
    'self care': SelfCareIcon,
  };
  const colors = {
    work: '--orange',
    play: '--light-blue',
    study: '--red',
    exercise: '--lime',
    social: '--violet',
    'self care': '--yellow',
  };
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <TimeCard
          key={item.title}
          title={item.title}
          data={item.timeframes[view]}
          icon={icons[item.title.toLowerCase()]}
          pastText={
            view === 'daily'
              ? 'Yesterday'
              : view === 'weekly'
              ? 'Last Week'
              : 'Last Month'
          }
          bgColor={colors[item.title.toLowerCase()]}
        />
      ))}
    </div>
  );
}

export default TimeGrid;
