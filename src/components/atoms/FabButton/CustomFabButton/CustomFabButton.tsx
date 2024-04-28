"use client"
import { StyledFab } from './styled';
import { Icon } from '@iconify/react';
import { ICustomFab } from './type';


export const CustomFabButton = (props: ICustomFab) => {
  const {onClick,size,variant,disabled,className,icon} = props

  const addIcon = icon? <Icon icon="fluent:add-24-filled"  style={{color: 'white'}} /> : <></>

  return (
    <StyledFab onClick={onClick}  size={size} variant={variant} disabled = {disabled}  className={className!} >
      {addIcon}
    </StyledFab>
  );
};
