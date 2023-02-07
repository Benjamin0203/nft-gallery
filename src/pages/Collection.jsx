import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import ButtonGradient from "../../components/shared/ButtonGradient";
import Section from "../../components/shared/Section";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useNfts } from "@/hooks";
import { getNfts } from "@/utils";

const placeHolderImage = require('../../public/space1.jpg');

const ImagesContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
  @media screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${(props) =>
      props.mbBreakpoint ? props.mbBreakpoint : props.mb};
  }
`;

const ImageOuter = styled.div`
  border: 1px solid var(--color-purple-100);
  background: rgb(95, 67, 178, 0.1);
  width: ${(props) => (props.sm ? "50%" : "100%")};
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => (props.alignEnd ? "flex-end" : "flex-start")};
  border-radius: 10px;
  padding: 1.2rem;
  @media screen and (max-width: 1000px) {
    padding: 0.8rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const ImageInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    border-radius: 10px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--color-gray);
  text-align: center;
  align-self: center;
  margin-top: 1.5rem;
  max-width: 700px;
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
`;

const Button = styled(ButtonGradient)`
  align-self: center;
  width: 250px;
  height: 60px;
  padding: 0;
  margin-top: 1.5rem;
`;

const ImageContainer = ({ children, sm, alignEnd }) => {
  return (
    <ImageOuter sm={sm} alignEnd={alignEnd}>
      <ImageInner>{children}</ImageInner>
    </ImageOuter>
  );
};

export default function Collection() {
  const [walletAddress, setWalletAddress] = useState(
    '0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4'
  );
  const { nfts, loading, error } = useNfts(walletAddress);
  
  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
      console.log(nfts[0].imageUrl);
    })();
  }, [walletAddress]);
  
  return (
    <>
    
    <Section title='OUR COLLECTION' id='collection'>
     
   
    <Fade cascade damping={0.1}>
      <ImagesContainer mb='1.5rem' mbBreakpoint='1rem'>
      {
        nfts.map(nft => {
          return (
            <ImageContainer key={nft.id}>
              <Image 
              src={nft.imageUrl} 
              alt={nft.name} 
              fill 
              onError={() => {
                console.log('error happend when loading images');
              }
              }/>
            </ImageContainer>
          )
        })
      }
      </ImagesContainer>
    </Fade>

    <Paragraph>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veritatis
      impedit repellendus magnam deleniti incidunt. Nulla temporibus
      consequuntur nostrum. Fugiat!
    </Paragraph>
    <Button>SEE ALL</Button>
  </Section>
  </>
  )

}