import { ImgButtonProps } from './type';
import Image from 'next/image';

const ImgButtonSlider = (props: ImgButtonProps) => {
  const { handleChangeSlide, slide, slideIndex, countSlide } = props;
  return (
    <Image
      loading="lazy"
      className={`Img-box-buttons ${slideIndex === countSlide ? 'current_selected' : ''}`}
      onClick={() => handleChangeSlide(slide)}
      alt="slide"
      src={slide}
      width={60}
      height={60}
      objectFit="cover"
    />
  );
};

export default ImgButtonSlider;
