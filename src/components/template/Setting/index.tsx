'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute, SettingRoute } from '@/strings';
import { Typography } from '@mui/material';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';

import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';

import { IModalState } from '../DataBank/type';
import { Backup } from '@/components/pages/dashboard/setting/Backup';
import { Client } from '@/components/pages/dashboard/setting/Client';
import { Face } from '@/components/pages/dashboard/setting/Face';
import { SocialSetting } from '@/components/pages/dashboard/setting/SocialSetting';
import CustomModal from '@/components/organisms/Modal/CustomModal';

export function SettingTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [frameModal, setFrameModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    {
      id: 0,
      label: SettingRoute.face,
      disableTabRipple: false,
      tabPanel: <Face />,
    },
    {
      id: 1,
      label: SettingRoute.client,
      disableTabRipple: false,
      tabPanel: <Client modal={frameModal} setModal={setFrameModal} />,
    },
    {
      id: 2,
      label: SettingRoute.publicSetting,
      disableTabRipple: false,
      tabPanel: <SocialSetting />,
    },
    {
      id: 3,
      label: <Typography>{SettingRoute.backup}</Typography>,
      disableTabRipple: false,
      tabPanel: <Backup />,
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

      {frameModal ? (
        <CustomModal
          onClose={() => setFrameModal(false)}
          open={frameModal}
          setOpen={setFrameModal}
          title={SettingRoute.canFramesBeRecorded}
          buttons
        />
      ) : null}
    </>
  );
}
