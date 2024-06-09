'use client';

import { CellType } from '@/components/CustomTable/types';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import TableWithFab from '@/components/template/TableWithFab';
import { DataBankRoute, commonWords, generalStr } from '@/strings';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TableCell, Typography } from '@mui/material';
import { useState } from 'react';
import { IModalState } from './type';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { usePathname, useRouter } from 'next/navigation';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import {
  dataBankHeaderUser,
  dataBankHeadergroup,
  dataBankMockUsers,
  dataBankMockgrous,
} from '@/components/pages/dashboard/data-bank/constants';
import UsersList from '@/components/pages/dashboard/data-bank/usersList';

export default function DatabankTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });
  const [imgModal, setImgModal] = useState(false);

  const router = useRouter();
  const currentPath = usePathname();

  const tableHeadsgroup: CellType[] = [
    ...dataBankHeadergroup,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="fluent:document-edit-20-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={(e) => {
              const editPath = `${currentPath}/edit/${row.id}`;
              router.push(editPath);
            }}
          />
          <Icon
            icon="tabler:trash-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            onClick={(e) =>
              setModalData({
                ...modalData,
                state: true,
                id: row?.id,
              })
            }
          />
        </TableCell>
      ),
    },
  ];

  const tabs = [
    {
      id: 0,
      label: <Typography>{DataBankRoute.usersList}</Typography>,
      disableTabRipple: false,
      tabPanel: <UsersList />,
    },
    {
      id: 1,
      label: <Typography>{DataBankRoute.groupList}</Typography>,
      disableTabRipple: false,
      tabPanel: (
        <TableWithFab tableHeads={tableHeadsgroup} data={dataBankMockgrous} />
      ),
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
