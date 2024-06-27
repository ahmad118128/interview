'use client';

import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { siderBarList } from '@/strings';
import { FiltersChips } from '@/components/CustomTable/types';
import { UsersFilterProps } from '@/components/pages/dashboard/image-recognition/types';
import { initFilter } from '@/components/pages/dashboard/image-recognition/constants';
import { useForm } from 'react-hook-form';
import { EFilterTableNameIcon } from '@/components/pages/dashboard/data-bank/usersList/type';
import TrafficAnalysisCp from '@/components/pages/dashboard/traffic-analysis';
import CustomTab from '@/components/molecules/CustomTab/styled';

export default function TrafficAnalysisTemplate() {
  const [collapse, setCollapse] = useState(false);
  const [filtersChips, setFiltersChips] = useState<
    FiltersChips<UsersFilterProps>
  >([]);
  const [filter, setFilter] = useState(initFilter);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { control, reset, setValue } = useForm();

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;

      default:
        break;
    }
  };

  const handleFiltersChips = (filterKey: keyof typeof initFilter) => {
    setValue(filterKey, initFilter[filterKey]);
    setFilter({ ...filter, [filterKey]: initFilter[filterKey] });
    setFiltersChips((prevFiltersChips) => {
      return prevFiltersChips.filter((chip) => chip.key !== filterKey);
    });
  };

  const tabs = [
    {
      id: 0,
      label: <Typography>{siderBarList.trafficAnalysis}</Typography>,
      disableTabRipple: false,
      tabPanel: <TrafficAnalysisCp />,
    },
  ];

  return <CustomTab data={tabs} type={'normalTab'}></CustomTab>;
}
