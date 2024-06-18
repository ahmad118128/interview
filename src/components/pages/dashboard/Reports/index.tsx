'use client';
import { useState } from 'react';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute, ReportRoute, generalStr } from '@/strings';
import { Typography } from '@mui/material';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { IModalState } from './type';
import TransientPeople from './components';

export function ReportPage() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const tabs = [
    {
      id: 0,
      label: <Typography>{ReportRoute.transientPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: (
        <TransientPeople
          modal={modalData}
          setModal={setModalData}
          setImgModal={setImgModal}
        />
      ),
    },
    {
      id: 1,
      label: <Typography>{ReportRoute.trafficOfPeople}</Typography>,
      disableTabRipple: false,
      tabPanel: <div>Tab 2</div>,
    },
    {
      id: 2,
      label: <Typography>{ReportRoute.arrivalsDepartures}</Typography>,
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
