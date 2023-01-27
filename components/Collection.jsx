import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ButtonGradient from "./shared/ButtonGradient";
import Section from "./shared/Section";

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-bottom: ${(props) => props.marginBottom || "2rem"};
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${(props) => props.breakPoint ? breakPoint : props.marginBottom};
  }
`;

export default function Collection() {
  return (
    <Section id="collection" title="COLLECTION">
      <ImageContainer>
        <Image
        src="/space1.jpg"
        width={280}
        height={280}
        />
        <Image
        src="/space1.jpg"
        width={280}
        height={280}
        
        />
        </ImageContainer>
      <ImageContainer>
        <Image
        src="/space1.jpg"
        width={280}
        height={280}
        />
        </ImageContainer>
      </Section>
  )

}