'use client';
import { useState } from 'react';
import Image from 'next/image';

import { ImgBox, SlideShow, SliderContainer } from './styled';
import { imgArray } from './model/model';
import BtnSlide from '@/components/atoms/slider/BtnSlide';
import CloseBtnSlider from '@/components/atoms/slider/CloseBtn';
import NumberSlide from '@/components/atoms/slider/NumberSlide';
import ImgButtonSlider from '@/components/atoms/slider/ImgButtonSlide';

export default function SlidePicture() {
  const [countSlide, setCountSlide] = useState<number>(0);
  const [imgSelected, setImgSelected] = useState<number>(0);

  const handleChangeSlide = (slide: any) => {
    setCountSlide(Number(imgArray.indexOf(slide)));
    setImgSelected(Number(imgArray.indexOf(slide)));
    console.log(typeof slide);
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

  console.log(`this is ${typeof imgArray[1]}`);

  return (
    <SliderContainer>
      <SlideShow>
        {imgArray.map((slide) => (
          <Image
            loading="lazy"
            className={`show-img ${imgArray.indexOf(slide) === countSlide ? 'fade_slide' : ''}`}
            key={imgArray.indexOf(slide)}
            alt="slide"
            src={slide}
            // width={394}
            // height={394}
            fill
            objectFit="cover"
          />
        ))}
        <BtnSlide handlePrevSlide={handlePrevSlide} />
        <BtnSlide handleNextSlide={handleNextSlide} />
        <CloseBtnSlider />
        <NumberSlide imgArray={imgArray} countSlide={countSlide} />
      </SlideShow>
      <ImgBox>
        {imgArray.map((slideBox, index) => (
          <ImgButtonSlider
            key={index}
            slide={slideBox}
            countSlide={countSlide}
            slideIndex={imgArray.indexOf(slideBox)}
            handleChangeSlide={handleChangeSlide}
          />
        ))}
      </ImgBox>
    </SliderContainer>
  );
}
