import React from 'react';
import ChallengeList from './ChallengeList';
import styles from './ChallengeCategory.module.css';

interface Challenge {
  title: string;
  description: string;
}

interface ChallengeCategoryProps {
  category: string;
  challenges: Challenge[];
}

const ChallengeCategory: React.FC<ChallengeCategoryProps> = ({
  category,
  challenges,
}) => {
  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>{category}</h2>
      <ChallengeList challenges={challenges} />
    </div>
  );
};

export default ChallengeCategory;
