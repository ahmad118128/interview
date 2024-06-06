'use client';
import { useState } from 'react';
import Image from 'next/image';

import { ImgBox, SlideButton, SlideShow, SliderContainer } from './styled';
import { imgArray } from './model/model';
import CloseBtnSlider from '@/components/atoms/slider/CloseBtn';
import NumberSlide from '@/components/atoms/slider/NumberSlide';
import ImgButtonSlider from '@/components/atoms/slider/ImgButtonSlide';

export default function SlidePicture() {
  const [countSlide, setCountSlide] = useState<number>(0);
  const [imgSelected, setImgSelected] = useState<number>(0);

  const handleChangeSlide = (slide: string) => {
    setCountSlide(Number(imgArray.indexOf(slide)));
    setImgSelected(Number(imgArray.indexOf(slide)));
  };

  const handleNextSlide = () => {
    if (countSlide >= imgArray.length - 1) {
      setCountSlide(0);
      setImgSelected(0);
    } else {
      setCountSlide(countSlide + 1);
      setImgSelected(imgSelected + 1);
    }
  };

  const handlePrevSlide = () => {
    if (countSlide <= 0) {
      setCountSlide(imgArray.length - 1);
    } else {
      setCountSlide(countSlide - 1);
    }
  };

  return (
    <SliderContainer>
      <SlideShow>
        {imgArray.map((slide, index) => (
          <Image
            loading="lazy"
            className={`show-img ${index === countSlide ? 'fade_slide' : ''}`}
            key={index}
            alt="slide"
            src={slide}
            fill
            objectFit="cover"
          />
        ))}
        <SlideButton
          iconName="ic:sharp-navigate-next"
          className="next-icon"
          onClick={handleNextSlide}
        />
        <SlideButton
          iconName="ic:sharp-navigate-next"
          className="prev-icon"
          onClick={handlePrevSlide}
        />

        <CloseBtnSlider />
        <NumberSlide imgArray={imgArray} countSlide={countSlide} />
      </SlideShow>
      <ImgBox>
        {imgArray.map((slideBox, index) => (
          <ImgButtonSlider
            key={index}
            slide={slideBox}
            handleChangeSlide={handleChangeSlide}
            compare={countSlide === index}
          />
        ))}
      </ImgBox>
    </SliderContainer>
  );
}
