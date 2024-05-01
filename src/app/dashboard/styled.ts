'use client';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSideBar = styled(Box)`
  width: 5rem;
  height: 100vh;
  transition: all 0.5s;
`;

export const StyledChildLayout = styled('main')`
  background: yellow;
  border: 5px solid;
  // margin-top: 4rem;
  overflow-y: scroll;

  overflow-x: hidden;
  padding: 2.5rem;
  flex-wrap: wrap;
  height: 100vh;
  flex: 1;
`;

export const StyledMainLayout = styled(Box)`
  width: 100vw;
  // flex: 1;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-right: 5rem;
`;

export const StyledContainerLayout = styled(Box)`
  // box-sizing: border-box;
  // min-height: 100vh;
  // height: auto;
  // position: relative;
  display: flex;
  width: 100%;
  background: red;
  // padding: 5px;
  box-sizing: border-box;
  // flex-wrap: no-wrap;
  // inset: 0;
  // overflow: hidden;
  // max-height: 100vh
  // width: 100vw;
  // position:relative;
`;

export const StyledContainerAppBar = styled(Box)`
  // position: fixed;
  width: 100%;
  // box-shadow:
  //   0px 2px 4px rgba(0, 0, 0, 0.2),
  //   0px 4px 5px rgba(0, 0, 0, 0.14),
  //   0px 1px 10px rgba(0, 0, 0, 0.12);
  // background-color: white;
  background: blue;
  // padding: 2px;
  height: 4rem;
`;

export const StyledContainerSideBar = styled(Box)`
  height: 100%;
  width: 5rem;
  // transition: all 0.5s;
  // background: radial-gradient(
  //   100% 67.64% at 100% 50%,
  //   #0b0038 0%,
  //   #1e1449 100%
  // );
  // display: flex;
  // flex-shrink: 0;
  // flex-direction: column;
  // justify-content: space-between;
  position: fixed;
  // flex: 1;
  // zindex: 200;
  background: green;
`;
