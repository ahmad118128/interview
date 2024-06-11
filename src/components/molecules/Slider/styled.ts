import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { Box, styled } from '@mui/material';

export const SliderContainer = styled(Box)`
  width: min(100%, 394px);
  margin: 0 auto;
  overflow-x: hidden;
  padding-bottom: 2px;
`;

export const SlideShow = styled(Box)`
  width: 100%;
  height: 394px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: 6px;
  box-sizing: border-box;
`;

export const CloseBtn = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.palette.common.black};
  cursor: pointer;
`;

export const ImgBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px auto 0;

  & .Img-box-buttons {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    box-sizing: border-box;
  }

  & .current_selected {
    outline: 2px solid ${({ theme }) => theme.palette.primary.light};
  }
`;

export const SlideButton = styled(IconButton)`
  position: absolute;
  width: 1.75rem;
  height: 1.75rem;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0;
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  transform: translateY(-50%);

  &.next-icon {
    left: 0;
    top: 45%;
    transform: rotateY(180deg);
  }
  &.prev-icon {
    right: 0;
    top: 50%;
  }
`;
