'use client';

import TrafficOfPeople from './components/Traffic-of-people';
import { Typography } from '@mui/material';
import { TrafficAnalysisRoute, generalStr } from '@/strings';
import { IModalState } from '@/components/template/DataBank/type';
import { useState } from 'react';
import CustomTab from '@/components/molecules/CustomTab/styled';
import { usePathname, useRouter } from 'next/navigation';

export default function Report() {
  const router = useRouter();
  const currentPath = usePathname();

  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const tabs = [
    {
      id: 0,
      label: <Typography>{generalStr.transientPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: null,
    },
    {
      id: 1,
      label: <Typography>{TrafficAnalysisRoute.trafficPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: (
        <TrafficOfPeople
          modal={modalData}
          setModal={setModalData}
          setImgModal={setImgModal}
        />
      ),
    },
    {
      id: 2,
      label: <Typography>{generalStr.loginLogout}</Typography>,
      disableTabRipple: false,
      tabPanel: null,
    },
  ];

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'}></CustomTab>
    </>
  );
}
