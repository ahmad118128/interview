'use client';
import { useState, SyntheticEvent } from 'react';
import { Tab, Tabs } from '@mui/material';

import { TabDataItemType, TabProps } from './type';
import TabPanel from './TabPanel';

export const BaseTab = (props: TabProps) => {
  const { data, activeid, type, sx, tabBtnSx, className } = props;
  const [value, setValue] = useState(activeid || 0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={type + ' ' + className}
        variant="scrollable"
        scrollButtons={false}
        sx={sx}
      >
        {data?.map((item: TabDataItemType) => {
          return (
            <Tab
              key={item.id}
              label={item.label}
              disabled={item.disabled}
              disableRipple={item.disableTabRipple}
              {...props}
              sx={tabBtnSx}
            />
          );
        })}
      </Tabs>
      {data?.map((item: TabDataItemType) => {
        return (
          <TabPanel value={value} key={item.id} index={item.id}>
            {item.tabPanel}
          </TabPanel>
        );
      })}
    </>
  );
};
