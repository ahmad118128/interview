import React from 'react';
import styles from './ChallengeList.module.css';

interface Challenge {
  title: string;
  description: string;
}

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList: React.FC<ChallengeListProps> = ({ challenges }) => {
  return (
    <ul className={styles.challengeList}>
      {challenges.map((challenge, index) => (
        <li key={index} className={styles.challengeItem}>
          <h3 className={styles.challengeTitle}>{challenge.title}</h3>
          <p className={styles.challengeDescription}>{challenge.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChallengeList;
