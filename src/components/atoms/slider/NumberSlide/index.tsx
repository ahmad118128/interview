import { NumberSlideProps } from './type';
import { NumSlide } from './styled';
import { persian } from '@/components/molecules/Slider/model/model';

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
      <NumSlide>
        {convertEnNumberToPersianNumber(countSlide + 1)} از{' '}
        {convertEnNumberToPersianNumber(imgArray.length)}
      </NumSlide>
    </>
  );
};

export default NumberSlide;
