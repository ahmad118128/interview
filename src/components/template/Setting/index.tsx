'use client';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { IModalState } from '../DataBank/type';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { usePathname, useRouter } from 'next/navigation';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import UsersList from '@/components/pages/dashboard/data-bank/usersList';
import GroupList from '@/components/pages/dashboard/data-bank/groupList';

export default function SettingTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    {
      id: 0,
      label: <Typography>{DataBankRoute.usersList}</Typography>,
      disableTabRipple: false,
      tabPanel: (
        <UsersList
          modal={modalData}
          setModal={setModalData}
          setImgModal={setImgModal}
        />
      ),
    },
    {
      id: 1,
      label: <Typography>{DataBankRoute.groupList}</Typography>,
      disableTabRipple: false,
      tabPanel: <GroupList modal={modalData} setModal={setModalData} />,
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
