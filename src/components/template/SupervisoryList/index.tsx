'use client';

import { useState } from 'react';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import { Typography } from '@mui/material';
import { SuperVisoryList } from '@/components/pages/dashboard/supervisory-list';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';

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
        <DeleteModal
          id={modalData.id}
          open={modalData.state}
          onSubmit={() => console.log(modalData.id)}
          buttons
          title={DataBankRoute.deleteModalBlackText}
          onClose={() => setModalData({ state: false })}
        ></DeleteModal>
      ) : null}
    </>
  );
}
