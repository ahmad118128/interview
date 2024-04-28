'use client';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h1">تست</Typography>
      <Typography variant="h2">تست</Typography>
      <Typography variant="h3">تست</Typography>
      <Typography variant="h4">تست</Typography>
      <Typography variant="body1">تست</Typography>
      <Typography variant="body2">تست</Typography>
      <Typography variant="caption">تست</Typography>
      <Typography variant="button">تست</Typography>
      <CustomTab
        type="buttonTab"
        data={[
          {
            id: 0,
            label: <div>تست1</div>,
            icon: 'gravity-ui:magnifier',
            tabPanel: <div>test1</div>,
          },
          { id: 1, label: 'تست2', tabPanel: <div>test2</div>, disabled: true },
          {
            id: 2,
            label: 'تست3',
            tabPanel: <div>test3</div>,
            icon: 'ion:filter',
          },
          { id: 3, label: 'تست4', tabPanel: <div>test4</div> },
        ]}
      />
      <CustomTab
        type="normalTab"
        data={[
          {
            id: 0,
            label: <div>تست1</div>,
            icon: 'ion:filter',
            tabPanel: <div>test1</div>,
          },
          { id: 1, label: 'تست2', tabPanel: <div>test2</div>, disabled: true },
          { id: 2, label: 'تست3', tabPanel: <div>test3</div> },
          { id: 3, label: 'تست4', tabPanel: <div>test4</div> },
        ]}
      />
    </>
  );
}
