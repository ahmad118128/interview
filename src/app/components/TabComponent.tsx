'use client';

import React, { useState } from 'react';

interface TabProps {
  labels: string[];
  children: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({ labels, children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div style={styles.tabHeaders}>
        {labels.map((label, index) => (
          <button
            key={index}
            style={activeTab === index ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div style={styles.tabContent}>{children[activeTab]}</div>
    </div>
  );
};

const styles = {
  tabHeaders: {
    display: 'flex',
    borderBottom: '2px solid #ccc',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#f1f1f1',
    border: 'none',
    borderBottom: '2px solid transparent',
  },
  activeTab: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    border: 'none',
    borderBottom: '2px solid #4285F4', // رنگ آبی گوگل
  },
  tabContent: {
    padding: '20px',
    borderTop: '2px solid #ccc',
  },
};

export default Tabs;
