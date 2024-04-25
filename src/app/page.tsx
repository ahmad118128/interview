'use client';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="button">button</Typography>
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
