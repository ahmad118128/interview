'use client';
import { useState, SyntheticEvent } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';

import { TabDataItemType, TabPanelProps, TabProps } from './type';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children && (
        <Box width={1} height={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

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
