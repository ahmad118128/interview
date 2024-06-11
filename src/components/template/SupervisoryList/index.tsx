'use client';

import { CustomTab } from '@/components/molecules/CustomTab/styled';
import { DataBankRoute } from '@/strings';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TableCell, Typography } from '@mui/material';
import { useState } from 'react';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { usePathname, useRouter } from 'next/navigation';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import { IModalState } from '../DataBank/type';
import SuperVisoryList from '@/components/pages/dashboard/supervisory-list';

export default function SupervisoryListTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tabs = [
    {
      id: 0,
      label: <Typography>{DataBankRoute.supervisoryList}</Typography>,
      disableTabRipple: false,
      tabPanel: <SuperVisoryList />,
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
