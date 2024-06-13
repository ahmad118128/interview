'use client';
import { useState } from 'react';
import Image from 'next/image';

import {
  CloseBtn,
  ImgBox,
  SlideButton,
  SlideShow,
  SliderContainer,
} from './styled';
import { imgArray } from './model/model';
import NumberSlide from '@/components/atoms/slider/NumberSlide';
import ImgButtonSlider from '@/components/atoms/slider/ImgButtonSlide';
import ImgShow from '@/components/atoms/slider/ImgShow';

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
          <ImgShow
            key={index}
            slide={slide}
            index={index}
            countSlide={countSlide}
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
        <CloseBtn iconName="iconamoon:close" />
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
