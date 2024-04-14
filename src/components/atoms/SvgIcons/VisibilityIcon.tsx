import { SvgType } from '@/app/types';
import { styled } from '@mui/material/styles';

const SvgWrapper = styled('div')`
  transition: 0.3s;
  &:hover {
    * {
      fill: green;
    }
  }
`;
const VisibilityIcon = ({ width, height, color, ...styles }: SvgType) => {
  return (
    <SvgWrapper>
      <svg
        {...styles}
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : '24'}
        height={height ? height : '24'}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill={color ? color : '#000'}
          d="M12 15.9c-2.2 0-3.9-1.8-3.9-3.9 0-2.1 1.7-3.9 3.9-3.9s3.9 1.8 3.9 3.9c0 2.1-1.7 3.9-3.9 3.9zm0-6.3c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4z"
        />
        <path
          fill={color ? color : '#000'}
          d="M12 20.1c-4.1 0-7.9-2.9-9.9-7.8-.1-.2-.1-.4 0-.6C4.1 6.8 7.9 4 12 3.9c4.1 0 7.9 2.9 9.9 7.8.1.2.1.4 0 .6-2 4.9-5.8 7.7-9.9 7.8zM3.6 12c1.9 4.1 5 6.6 8.4 6.6 3.4 0 6.6-2.4 8.4-6.6-1.9-4.1-5-6.6-8.4-6.6-3.4 0-6.6 2.5-8.4 6.6z"
        />
      </svg>
    </SvgWrapper>
  );
};

export default VisibilityIcon;
