'use client';
import { CellType } from '@/components/CustomTable/types';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
import {
  dataBankHeaderUser,
  dataBankMockUsers,
  mockData,
} from '@/components/pages/dashboard/image-recognition/constants';
import TableWithFab from '@/components/template/TableWithFab';
import { DataBankRoute, commonWords } from '@/strings';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { TableCell, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { IModalState } from './type';
import CustomModal from '@/components/organisms/Modal/CustomModal';

export default function DatabankTemplate() {
  const [modalData, setModalData] = useState<IModalState>({
    state: false,
  });

  const tableHeads: CellType[] = [
    ...dataBankHeaderUser,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="tabler:photo-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
          />
          <Icon
            icon="fluent:document-edit-20-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
            onClick={(e) => console.log(row.id)}
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
      tabPanel: (
        <TableWithFab tableHeads={tableHeads} data={dataBankMockUsers} />
      ),
    },
    {
      id: 1,
      label: <Typography>{DataBankRoute.groupList}</Typography>,
      disableTabRipple: false,
      tabPanel: <TableWithFab tableHeads={tableHeads} data={mockData} />,
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
          errorTitle="این عمل برگشت ناپذیر است"
          title="آیا برای حذف این گزینه مطمئن هستید ؟"
          handleClose={() => setModalData({ state: false })}
        ></CustomModal>
      ) : null}
    </>
  );
}
