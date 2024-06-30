'use client';

import React, { useState } from 'react';
import { Grid } from '@mui/material';

import DashboardChartCard from '@/components/organisms/DashboardChartCard';
import { BarChart } from '@/components/organisms/Charts/BarChart';
import DoughnutChart from '@/components/organisms/Charts/DoughnutChart';
import { TrafficAnalysisRoute } from '@/strings';
import { FiltersChips } from '@/components/CustomTable/types';
import { UsersFilterProps } from '@/components/pages/dashboard/image-recognition/types';
import { initFilter } from '@/components/pages/dashboard/image-recognition/constants';
import { FilterContainer } from '@/components/pages/dashboard/traffic-analysis/FilterContainer';
import { useForm } from 'react-hook-form';
import { EFilterTableNameIcon } from '@/components/pages/dashboard/data-bank/usersList/type';
import theme from '@/theme';

export default function TrafficAnalysisCp() {
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

  return (
    <>
      <FilterContainer
        control={control}
        reset={reset}
        collapse={collapse}
        onHandleIconClick={handleIconClick}
        chips={filtersChips}
        handleFiltersChips={handleFiltersChips}
        refreshLoading={isLoading}
        setCollapse={setCollapse}
      />
      <Grid container spacing={4} marginTop="1rem">
        <Grid item xs={12} md={6} lg={3}>
          <DashboardChartCard title={TrafficAnalysisRoute.mensTraffic}>
            <DoughnutChart
              labels={['شناسایی شده']}
              data={[76, 100 - 76]}
              legend={false}
              chartLabel="%"
              selectedData={76}
              firstColorGrade1={theme.palette.primary.light}
              firstColorGrade2="#4D7C32"
              secondColorGrade1={theme.palette.grey[200]}
              secondColorGrade2={theme.palette.grey[200]}
              showTooltip={false}
            />
          </DashboardChartCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardChartCard title={TrafficAnalysisRoute.womensTraffic}>
            <DoughnutChart
              labels={['نامشخص', '']}
              data={[35, 100 - 35]}
              legend={false}
              chartLabel="%"
              selectedData={35}
              firstColorGrade1="#858585"
              firstColorGrade2={theme.palette.primary.main}
              secondColorGrade1={theme.palette.grey[200]}
              secondColorGrade2={theme.palette.grey[200]}
              showTooltip={false}
            />
          </DashboardChartCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardChartCard title={TrafficAnalysisRoute.sampleChart}>
            <DoughnutChart
              labels={['شناسایی شده']}
              data={[62, 100 - 62]}
              legend={false}
              chartLabel="%"
              selectedData={62}
              firstColorGrade1={theme.palette.primary.light}
              firstColorGrade2="#4D7C32"
              secondColorGrade1={theme.palette.grey[200]}
              secondColorGrade2={theme.palette.grey[200]}
              showTooltip={false}
            />
          </DashboardChartCard>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <DashboardChartCard title={TrafficAnalysisRoute.sampleChart}>
            <DoughnutChart
              labels={['زن']}
              data={[15, 100 - 15]}
              legend={false}
              chartLabel="%"
              selectedData={15}
              firstColorGrade1="#858585"
              firstColorGrade2={theme.palette.primary.main}
              secondColorGrade1={theme.palette.grey[200]}
              secondColorGrade2={theme.palette.grey[200]}
              showTooltip={false}
            />
          </DashboardChartCard>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DashboardChartCard title={TrafficAnalysisRoute.trafficPerHour}>
            <BarChart
              labels={['January', 'February', 'March', 'April']}
              data={[{ label: 'مرد', data: [120, 130, 140, 15] }]}
            />
          </DashboardChartCard>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DashboardChartCard title={TrafficAnalysisRoute.ageRange}>
            <BarChart
              labels={['January', 'February', 'March', 'April']}
              data={[
                { label: 'مرد', data: [120, 130, 140, 15] },
                { label: 'زن', data: [30, 40, 50, 120] },
              ]}
              legend={true}
            />
          </DashboardChartCard>
        </Grid>
      </Grid>
    </>
  );
}
