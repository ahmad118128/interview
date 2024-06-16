import { styled } from '@mui/material';
import Image from 'next/image';

export const ImgShowing = styled(Image)`
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
  &.fade_slide {
    display: block;
  }
`;
