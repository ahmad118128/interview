'use client';
import { useState } from 'react';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { IModalState } from './type';

import { tabs } from './constants';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';

export function ReportPage() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });

  return (
    <>
      <CustomTab data={tabs} type={'normalTab'} />

      {modalData.state ? (
        <DeleteModal
          id={modalData.id}
          open={modalData.state}
          onSubmit={() => console.log(modalData.id)}
          buttons
          title={DataBankRoute.deleteModalBlackText}
          onClose={() => setModalData({ state: false })}
        />
      ) : null}
    </>
  );
}
