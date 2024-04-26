/* eslint-disable react/jsx-no-useless-fragment */
import { MouseEvent } from 'react';
import { Chip, ChipPropsSizeOverrides } from '@mui/material';
import { Icon } from '@iconify/react';

import { IBasedChip } from './type';

export const BasedChip = (props: IBasedChip) => {
  const { label, typeChip, disabled, deleteIcon, icon, onDelete, className } =
    props;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  const handleDelete = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDelete && onDelete();
  };

  // const deleteIcon = <Icon icon="basil:cross-outline" />;

  return (
    <Chip
      className={className}
      label={label}
      deleteIcon={deleteIcon}
      disabled={disabled}
      onClick={handleClick}
      onDelete={handleDelete}
      icon={icon}
    />
  );
};
