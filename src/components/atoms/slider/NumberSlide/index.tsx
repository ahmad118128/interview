import { NumberSlideProps } from './type';
import { NumSlide } from './styled';
import { persian } from '@/components/molecules/Slider/model/model';
import { generalStr } from '@/strings';

const NumberSlide = ({ countSlide, imgArray }: NumberSlideProps) => {
  const convertEnNumberToPersianNumber = (enNumber: number) => {
    let convertedCharacters: string[] = enNumber.toString().split('');
    for (let i = 0; i < convertedCharacters.length; i++) {
      // @ts-ignore
      convertedCharacters[i] = persian[convertedCharacters[i]];
    }
    return convertedCharacters.join();
  };

  return (
    <>
      <NumSlide variant="h2">
        {`${convertEnNumberToPersianNumber(countSlide + 1)} ${generalStr.from} ${convertEnNumberToPersianNumber(imgArray.length)}`}
      </NumSlide>
    </>
  );
};

export default NumberSlide;
