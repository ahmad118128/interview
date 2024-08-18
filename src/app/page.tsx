'use client';

import React, { useContext } from 'react';
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

import { averageNumber } from '@/app/components/JS/avrageNumber';
import { divideTHeString } from '@/app/components/JS/divideTheString';
import { oddnumber } from '@/app/components/JS/oddNumber';
import { TypeScriptComponent } from '@/app/components/Typescript/typescriptComponant';
import {
  giveUserStateBaseOnRequest,
  IGetUserData,
} from '@/app/components/Typescript/EnumAoolication';
import { genricFunction } from '@/app/components/Typescript/GenericFunction';
import { BaseForm } from '@/app/components/react/CustomForm';
import {
  ContextProvider,
  ContextProviderUser,
} from '@/app/components/react/Appcontext';

const Page: React.FC = () => {
  console.log('averageNumber', averageNumber([1, 2, 3, 4, 5]));
  console.log('divideTHeString', divideTHeString(['a', 'b', 'c']));
  console.log('oddnumber', oddnumber(17));
  console.log(
    'genricFunction',
    genricFunction({
      name: 'name',
      userName: 'userName',
      password: 2,
    })
  );
  console.log(
    'giveUserStateBaseOnRequest',
    giveUserStateBaseOnRequest({
      status: 200,

      isError: true,
      isPending: true,
    })
  );

  const contextUser = useContext(ContextProvider);

  return (
    <ContextProviderUser>
      <BaseForm />
      {contextUser?.user}
      <div>
        <TypeScriptComponent
          name="navis"
          isAdmin
          passWord={45445}
          userName="khalr"
        />
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
    </ContextProviderUser>
  );
};

export default Page;
