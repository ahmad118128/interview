'use client';

import { useState } from 'react';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import { Typography } from '@mui/material';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { SuperVisoryList } from '@/components/pages/dashboard/supervisory-list';

import { IModalState } from '../DataBank/type';

export function SupervisoryListTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });

  const tabs = [
    {
      id: 0,
      label: <Typography>{DataBankRoute.supervisoryList}</Typography>,
      disableTabRipple: false,
      tabPanel: <SuperVisoryList modal={modalData} setModal={setModalData} />,
    },
  ];

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'}></CustomTab>

      {modalData.state ? (
        <CustomModal
          id={modalData.id}
          open={modalData.state}
          onSubmit={() => console.log(modalData.id)}
          buttons
          errorTitle={DataBankRoute.deleteModalRedText}
          title={DataBankRoute.deleteModalBlackText}
          handleClose={() => setModalData({ state: false })}
        ></CustomModal>
      ) : null}
    </>
  );
}
