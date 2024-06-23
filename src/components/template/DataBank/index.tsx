'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { TableCell, Typography } from '@mui/material';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import UsersList from '@/components/pages/dashboard/data-bank/usersList';
import GroupList from '@/components/pages/dashboard/data-bank/groupList';
import { DeleteModal } from '@/components/organisms/Modal/DeleteModal.tsx';

import { IModalState } from './type';

export default function DatabankTemplate() {
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
