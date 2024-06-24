'use client';
import { useState } from 'react';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { IModalState } from './type';

import { tabs } from './constants';

export function ReportPage() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'} />

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
