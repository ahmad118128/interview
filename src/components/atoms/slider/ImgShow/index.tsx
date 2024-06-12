import { ImgShowing } from './styled';
import { ImgShowProps } from './type';

const ImgShow = (props: ImgShowProps) => {
  const { index, countSlide, slide } = props;
  return (
    <>
      <ImgShowing
        className={`${index === countSlide ? 'fade_slide' : ''}`}
        src={slide}
        alt=""
        fill
      />
    </>
  );
};

export default ImgShow;
