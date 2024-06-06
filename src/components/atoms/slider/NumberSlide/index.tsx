import { NumberSlideProps } from './type';
import { NumSlide } from './styled';
import { generalStr } from '@/strings';

const NumberSlide = ({ countSlide, imgArray }: NumberSlideProps) => {
  return (
    <>
      <NumSlide variant="h2">
        {`${countSlide + 1} ${generalStr.from} ${imgArray.length}`}
      </NumSlide>
    </>
  );
};

export default NumberSlide;
