import { Box, styled } from '@mui/material';

export const SliderContainer = styled('main')`
  width: min(100%, 394px);
  margin: 0 auto;
  overflow-x: hidden;
`;

export const SlideShow = styled(Box)`
  width: 100%;
  height: 394px;
  position: relative;
  border: 2px solid #ededef;
  border-radius: 6px;
  box-sizing: border-box;

  & .show-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation-name: show;
    animation-duration: 0.8s;
    display: none;
    border-radius: 6px;

    @keyframes show {
      from {
        opacity: 0.6;
      }
      to {
        opacity: 1;
      }
    }
  }

  & .fade_slide {
    display: block;
  }

  & .next-icon {
    position: absolute;
    left: 0;
    top: 45%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin: 0;
    padding: 4px;
    color: ${({ theme }) => theme.palette.common.black};
    transform: rotateY(180deg);
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  & .prev-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0;
    padding: 4px;
    color: ${({ theme }) => theme.palette.common.black};
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  & .close-slide-button {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.palette.common.black};
    cursor: pointer;
  }
`;

export const ImgBox = styled('div')`
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
    outline: 2px solid #7ebc59;
  }
`;
