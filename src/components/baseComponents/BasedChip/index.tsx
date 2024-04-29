import { MouseEvent } from 'react';
import { Chip } from '@mui/material';

import { IBasedChip } from './type';

export const BasedChip = (props: IBasedChip) => {
  const {
    label,
    typeChip,
    disabled,
    deleteIcon,
    icon,
    onDelete,
    className,
    ...rest
  } = props;

  const handleClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  const handleDelete = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDelete && onDelete();
  };

  return (
    <Chip
      className={className}
      label={label}
      deleteIcon={deleteIcon}
      disabled={disabled}
      onClick={handleClick}
      onDelete={handleDelete}
      icon={icon}
      {...rest}
    />
  );
};
