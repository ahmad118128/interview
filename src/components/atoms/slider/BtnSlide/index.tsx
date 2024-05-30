import { NextButtonProps } from './type';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BtnSlide = ({ handlePrevSlide, handleNextSlide }: NextButtonProps) => {
  return (
    <ChevronRightIcon
      className={`${handleNextSlide ? 'next-icon' : handlePrevSlide ? 'prev-icon' : ''}`}
      onClick={handleNextSlide ? handleNextSlide : handlePrevSlide}
    />
  );
};

export default BtnSlide;
