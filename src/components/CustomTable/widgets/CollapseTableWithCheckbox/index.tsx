import { useEffect, useState } from 'react';

import { SelectTableProps } from './type';
import { CellType } from '../../types';
import { BaseTable } from '../../shared';
import { CollapseCheckboxRow } from './collapseCheckboxRow';
import { StyledTableWrapper } from '../MobileCollapseTable/styled';

const COLLAPSE_ID = 'collapse';

export const CollapseTableWithCheckbox = (props: SelectTableProps) => {
  const {
    rows,
    headers,
    handleSort,
    error,
    pagination,
    emptyDataMessage,
    setSelectedId,
    selectedId,
    selectedMode,
    collapseChildren,
  } = props;
  const [selected, setSelected] = useState<Array<string | number>>(
    selectedId ?? []
  );
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const allId =
    selectedMode &&
    rows?.map((item: any) => {
      return item.id;
    });
  useEffect(() => {
    if (allId?.length === selected?.length) {
      setAllSelected(true);
      setIndeterminate(false);
    } else if (selected?.length >= 1) {
      setIndeterminate(true);
    } else {
      setAllSelected(false);
      setIndeterminate(false);
    }
    setSelectedId && setSelectedId(selected);
  }, [allId?.length, allSelected, selected, setSelectedId]);

  let header: CellType[] = headers;

  header = headers.filter((item: CellType) => {
    return item?.id !== COLLAPSE_ID;
  });

  const HandleCheckBoxChange = (id: string) => {
    // Check if the id already exists in the selected array
    if (!selected.includes(id)) {
      // If it doesn't exist, add it to the array
      setSelected([...selected, id]);
    } else {
      // If it does exist, remove it from the array
      setSelected(selected.filter((item) => item !== id));
    }
  };
  const HandleCheckBoxHeader = (e: any) => {
    if (e?.target?.checked) {
      setSelected(allId);
      setAllSelected(true);
    } else {
      setSelected([]);
      setAllSelected(false);
    }
  };

  return (
    <StyledTableWrapper>
      <BaseTable
        headers={header}
        rows={rows}
        HandleCheckBoxHeader={(e: any) => HandleCheckBoxHeader(e)}
        allSelected={allSelected}
        handleSort={handleSort}
        error={error}
        pagination={pagination}
        emptyDataMessage={emptyDataMessage}
        selectedMode={selectedMode}
        indeterminate={indeterminate}
      >
        {rows?.map((row: any, index: number) => {
          const key = row?.id || index;
          return (
            <CollapseCheckboxRow
              key={`key${key}`}
              row={row}
              header={header}
              activeIndex={selected}
              HandleCheckBoxChange={() => HandleCheckBoxChange(row?.id)}
              selectedMode={selectedMode}
              collapseChildren={collapseChildren}
            />
          );
        })}
      </BaseTable>
    </StyledTableWrapper>
  );
};
