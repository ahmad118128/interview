'use client';

import React from 'react';
import ChallengeCategory from './components/ChallengeCategory';
import styles from './page.module.css';
import Tabs from '@/app/components/TabComponent';
import {
  javascript,
  typescript,
  react,
  nextjs,
  frontend,
} from '@/app/components/constants';

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 style={{ margin: 10 }}>
          Welcome to the hands-on assessment of front-end programming
        </h1>
        <Tabs
          labels={['javascript', 'typescript', 'react', 'nextjs', 'frontend']}
        >
          {Object.entries(javascript).map(([category, levels]) => (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(levels).map(([level, challenges]) => (
                <ChallengeCategory
                  key={level}
                  category={`${category} - ${level}`}
                  challenges={challenges}
                />
              ))}
            </section>
          ))}
          {Object.entries(typescript).map(([category, levels]) => (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(levels).map(([level, challenges]) => (
                <ChallengeCategory
                  key={level}
                  category={`${category} - ${level}`}
                  challenges={challenges}
                />
              ))}
            </section>
          ))}
          {Object.entries(react).map(([category, levels]) => (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(levels).map(([level, challenges]) => (
                <ChallengeCategory
                  key={level}
                  category={`${category} - ${level}`}
                  challenges={challenges}
                />
              ))}
            </section>
          ))}
          {Object.entries(nextjs).map(([category, levels]) => (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(levels).map(([level, challenges]) => (
                <ChallengeCategory
                  key={level}
                  category={`${category} - ${level}`}
                  challenges={challenges}
                />
              ))}
            </section>
          ))}
          {Object.entries(frontend).map(([category, levels]) => (
            <section key={category} className={styles.category}>
              <h2 className={styles.categoryTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(levels).map(([level, challenges]) => (
                <ChallengeCategory
                  key={level}
                  category={`${category} - ${level}`}
                  challenges={challenges}
                />
              ))}
            </section>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
