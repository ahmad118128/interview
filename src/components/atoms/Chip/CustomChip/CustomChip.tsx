import { Icon } from '@iconify/react';
import { StyledChip } from './styled';
import { ICustomChip } from './type';

export const CustomChip = (props: ICustomChip) => {
  const { typeChip, chipSize, label, disabled, ltr, variant, onDelete } = props;

  const chipDeleteIcon = <Icon icon="line-md:remove" width="12px" height="12px" />;

  return (
    <StyledChip
      typeChip={typeChip}
      deleteIcon={chipDeleteIcon}
      className={`${typeChip} ${chipSize}`}
      label={label}
      ltr={ltr}
      variant={variant}
      onDelete={onDelete}
      disabled={disabled}
    />
  );
};



