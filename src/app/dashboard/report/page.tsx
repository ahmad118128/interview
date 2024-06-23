'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Typography } from '@mui/material';
import TrafficOfPeople from './components/Traffic-of-people';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';
import { DataBankRoute, TrafficAnalysisRoute, generalStr } from '@/strings';
import { IModalState } from '@/components/template/DataBank/type';
import CustomTab from '@/components/molecules/CustomTab/styled';

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

      {imgModal ? (
        <ThumbnailPicModal
          onClose={() => setImgModal(false)}
          open={imgModal}
          setOpen={setImgModal}
          src={'/assets/images/dashboard/technology 1.svg'}
        />
      ) : null}
    </>
  );
}
