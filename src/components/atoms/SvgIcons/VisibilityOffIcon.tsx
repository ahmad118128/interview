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

const VisibilityOffIcon = ({ width, height, color, ...styles }: SvgType) => {
  return (
    <SvgWrapper className="iconWrapper">
      <svg
        {...styles}
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : '24'}
        height={height ? height : '24'}
        viewBox="0 0 24 24"
      >
        <path d="M14.375 12.125c-.2 1-1 1.8-1.9 1.9-.4.1-.7.5-.6.9.1.4.4.6.7.6h.1c1.6-.3 2.9-1.6 3.1-3.1.1-.4-.2-.8-.6-.9-.4-.1-.8.2-.8.6z" />
        <path d="M21.875 11.325c-.5-1.2-1.1-2.3-1.9-3.3-.2-.3-.7-.4-1-.1-.3.2-.4.7-.1 1.1.6.8 1.1 1.7 1.6 2.7-1.9 4.1-5 6.6-8.4 6.6-.8 0-1.5-.1-2.3-.4-.4-.1-.8.1-.9.5-.1.4.1.8.5.9.9.3 1.8.5 2.8.5 4.1 0 7.8-2.9 9.9-7.8-.1-.3-.1-.5-.2-.7zM20.375 3.225c-.3-.3-.8-.3-1.1 0l-2.1 2.1c-3.4-2.4-7.8-2.2-11 .4-1.7 1.3-3.1 3.3-4.1 5.6-.1.2-.1.4 0 .6.8 2.1 2 3.8 3.5 5.1l-2 2c-.3.3-.3.8 0 1.1.1.1.3.2.5.2s.4-.1.5-.2l15.8-15.8c.3-.3.3-.8 0-1.1zm-16.8 8.4c.9-2 2.1-3.6 3.6-4.8 2.7-2.1 6.2-2.3 9-.5l-2 2c-.7-.3-1.4-.6-2.2-.6-2.2 0-3.9 1.8-3.9 3.9 0 .8.2 1.5.7 2.2l-2.1 2.1c-1.3-1-2.3-2.5-3.1-4.3zm6.3 1.1c-.2-.3-.3-.7-.3-1.1 0-1.3 1.1-2.4 2.4-2.4.4 0 .8.1 1.1.3l-3.2 3.2z" />
      </svg>
    </SvgWrapper>
  );
};

export default VisibilityOffIcon;
