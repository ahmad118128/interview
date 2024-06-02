import { IconButton } from '../../CustomButton/IconButton';
import { NextButtonProps } from './type';

const BtnSlide = ({ handlePrevSlide, handleNextSlide }: NextButtonProps) => {
  return (
    <IconButton
      iconName="ic:sharp-navigate-next"
      className={`${handleNextSlide ? 'next-icon' : handlePrevSlide ? 'prev-icon' : ''}`}
      onClick={handleNextSlide ? handleNextSlide : handlePrevSlide}
    />
  );
};

export default BtnSlide;
