import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { EffectCoverflow, Pagination } from "swiper";

import Image from "next/image";
import styled from "styled-components";


const Container = styled.div``;

const StyledSwiper = styled(Swiper)`
  padding-top: 100px;
  padding-bottom: 100px;
  cursor: pointer;

  .swiper-pagination .swiper-pagination-bullet {
    opacity: 1;
    background-color: var(--color-red-700);
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--color-red-100);
  }
`;

export default function Carousel() {
  const images = [
    "/images/space1.jpg",
    "/images/space2.jpg",
    "/images/space3.jpg",
    "/images/space4.jpg",
    "/images/space5.jpg",
    "/images/space6.jpg",
    "/images/space7.jpg",
    "/images/space8.jpg",
  ];

  return (
    <Container>
    <StyledSwiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 60,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      simulateTouch={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className='mySwiper'
      autoHeight={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`/space${index + 1}.jpg`}
            width={500}
            height={500}
            draggable={false}
            style={{ userSelect: "none", objectFit:'cover', layout:'responsive'}}
            alt='spaceNFT'
            border='10px solid red'
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  </Container>
  )


}