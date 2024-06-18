'use client';
import { useState } from 'react';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute, generalStr } from '@/strings';
import { Typography } from '@mui/material';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { SuperVisoryList } from '@/components/pages/dashboard/supervisory-list';
import { IModalState } from './type';
import TransientPeople from './components';

export function TransientPeoplePage() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const tabs = [
    {
      id: 0,
      label: <Typography>{generalStr.transientPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: <TransientPeople modal={modalData} setModal={setModalData} />,
    },
    {
      id: 1,
      label: <Typography>{generalStr.transientPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: <div>Tab 2</div>,
    },
    {
      id: 2,
      label: <Typography>{generalStr.transientPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: <div>Tab 3</div>,
    },
  ];

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'}></CustomTab>

      {modalData.state ? (
        <CustomModal
          id={modalData.id}
          open={modalData.state}
          activeButtonHandler={() => console.log(modalData.id)}
          buttons
          errorTitle={DataBankRoute.deleteModalRedText}
          title={DataBankRoute.deleteModalBlackText}
          handleClose={() => setModalData({ state: false })}
        ></CustomModal>
      ) : null}
    </>
  );
}
