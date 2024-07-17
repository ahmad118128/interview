'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Typography } from '@mui/material';
import { SupervisitoryListRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';

import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '@/components/template/FilterContainer/styled';
import { COLLAPSE_ID } from '../../image-recognition/constants';
import {
  supervisitoryListMembersHeader,
  supervisitoryListMembersMock,
} from '../constants';
import { IError, ISuccess } from '../../image-recognition/types';

export default function Members() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();

  const goBackUrl = () => {
    router.back();
  };

  return (
    <StyledAddFormWrapper>
      <StyledAddFormHeader>
        <Typography variant="h2">
          {SupervisitoryListRoute.supervisitoryListMembers}
        </Typography>

        <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
      </StyledAddFormHeader>

      <StyledAddFormMain>
        <MobileCollapseTable
          rows={supervisitoryListMembersMock}
          headers={supervisitoryListMembersHeader}
          error={!tableData?.data?.results}
          mobileIdFilter={[COLLAPSE_ID, 'fullName', 'nationalId']}
          handleSort={(id) => {
            setOrder(id);
          }}
        />
      </StyledAddFormMain>
    </StyledAddFormWrapper>
  );
}
