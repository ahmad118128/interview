'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute, SettingRoute } from '@/strings';
import { Typography } from '@mui/material';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import { SocialSettingCp } from '@/components/pages/dashboard/setting/SocialSettingCp';
import { FaceCP } from '@/components/pages/dashboard/setting/FaceCP';
import { BackupCP } from '@/components/pages/dashboard/setting/BackupCp';
import { ClientCp } from '@/components/pages/dashboard/setting/ClientCp';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';

import { IModalState } from '../DataBank/type';

export function SettingTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    {
      id: 0,
      label: <Typography>{SettingRoute.face}</Typography>,
      disableTabRipple: false,
      tabPanel: <FaceCP />,
    },
    {
      id: 1,
      label: <Typography>{SettingRoute.client}</Typography>,
      disableTabRipple: false,
      tabPanel: <ClientCp modal={modalData} setModal={setModalData} />,
    },
    {
      id: 2,
      label: <Typography>{SettingRoute.publicSetting}</Typography>,
      disableTabRipple: false,
      tabPanel: <SocialSettingCp />,
    },
    {
      id: 3,
      label: <Typography>{SettingRoute.backup}</Typography>,
      disableTabRipple: false,
      tabPanel: <BackupCP />,
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
          handleClose={() => setModalData({ state: false })}
        ></DeleteModal>
      ) : null}

      {imgModal ? (
        <ThumbnailPicModal
          handleClose={() => setImgModal(false)}
          open={imgModal}
          setOpen={setImgModal}
          src={'/assets/images/dashboard/technology 1.svg'}
        />
      ) : null}
    </>
  );
}
