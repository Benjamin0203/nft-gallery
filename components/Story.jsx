import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ButtonGradient from "./shared/ButtonGradient";
import FlexWrap from "./shared/FlexWrap";
import Box from "./shared/Box";


const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: 400px;
  }
`;

const ImageContainerAbsolute = styled.div`
  position: absolute;
  z-index: 2;
  height: 300px;
  width: 300px;
  top: 90%;
  left: 50%;
  transform: translateY(-90%) translateX(-100%);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 400;
  text-shadow: 2px 2px var(--color-pink-100);
  color: var(--color-white);
`;

const Paragraph = styled.p`
  color: var(--color-black);
  margin-bottom: 1.4rem;
  line-height: 1.7;
`;
export default function Story() {
  return (
    <FlexWrap>
      <ImageContainerAbsolute>
        <Image src='/space1.jpg'  width={280} height={280} style={{objectFit:'cover', layout:'fill'}} alt='ntf' />
      </ImageContainerAbsolute>
      <ImageContainer>
        <Image src='/space2.jpg' width={280} height={280} style={{objectFit:'cover', layout:'fill'}} alt='bg' />
      </ImageContainer>
      <Box>
        <Title>Lorem</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo
          velit tenetur eligendi. Placeat, qui!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          repellat eligendi obcaecati, asperiores atque aliquid voluptatum
          impedit maiores delectus minus.
        </Paragraph>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          temporibus quidem corrupti nobis dolorum, tenetur ea eos repellat sit
          est dolor officia error magni reiciendis ipsam aliquid, repellendus
          consequatur? Cum unde sapiente tempora deserunt. Culpa ipsam repellat
          omnis amet quos.
        </Paragraph>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          blanditiis aliquid et, delectus fuga molestiae, minus cumque natus
          obcaecati soluta explicabo, nihil fugiat. Aspernatur culpa,
          voluptatibus itaque sunt accusamus velit totam eos quae consectetur
          maiores at tempora, praesentium pariatur, placeat ipsam adipisci
        </Paragraph>
        <ButtonGradient>Learn more about us</ButtonGradient>
      </Box>
    </FlexWrap>
  )
}