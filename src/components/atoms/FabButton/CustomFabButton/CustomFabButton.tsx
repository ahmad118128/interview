"use client"
import { StyledFab } from './styled';
import { Icon } from '@iconify/react';


export const CustomFabButton = (props: any) => {

  const addIcon = props.icon? <Icon icon="fluent:add-24-filled"  style={{color: 'white'}} /> : <></>

  return (
    <StyledFab  size={props.size} variant={props.variant} disabled = {props.disabled} {...props} >
      {props.children}{addIcon}
    </StyledFab>
  );
};
