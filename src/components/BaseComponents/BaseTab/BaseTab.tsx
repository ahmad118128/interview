'use client';
import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { Icon } from '@iconify/react';
import {
  TabDataItemType,
  TabProps,
} from '@/components/BaseComponents/BaseTab/type';
import { TabPanel } from '@/components/BaseComponents/BaseTab/TabPanel';
import { useRouter, useSearchParams } from 'next/navigation';

export const BaseTab = (props: TabProps) => {
  const { data, activeId, type, sx, tabBtnSx, className, tabKey } = props;
  const [value, setValue] = useState(activeId || 0);

  const searchParam = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback(
    (value: string | number) => {
      const params = new URLSearchParams(searchParam.toString());
      params.set(tabKey, String(value));

      return params.toString();
    },
    [searchParam, tabKey]
  );

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    router.push('?' + createQueryString(newValue));
    setValue(newValue);
  };

  useEffect(() => {
    if (searchParam.get(tabKey)) {
      setValue(Number(searchParam.get(tabKey) || 0));
    }
  }, [searchParam, tabKey]);

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
              label={
                item.icon ? (
                  <Box>
                    <Icon icon={item.icon} />
                    {item.label}
                  </Box>
                ) : (
                  item.label
                )
              }
              disabled={item.disabled}
              disableRipple={item.disableTabRipple}
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
