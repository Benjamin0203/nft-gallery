import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useNfts } from "@/hooks";
import { getNfts } from "@/utils";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";

import ButtonGradient from "components/shared/ButtonGradient";
import Section from "components/shared/Section";
import SvgButton from "../../components/shared/SvgButton";

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 60%;
  height: 60%;
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

const ImageContainer = ({ children, sm, alignEnd }) => {
  return (
    <ImageOuter sm={sm} alignEnd={alignEnd}>
      <ImageInner>{children}</ImageInner>
    </ImageOuter>
  );
};

const Button = styled(ButtonGradient)`
  align-self: center;
  width: 250px;
  height: 60px;
  padding: 0;
  margin-top: 1.5rem;
`;

const BackButton = styled.div`
position: fixed;
z-index: 3;
bottom: 1.5rem;
left: var(--padding-wrapper);
display: flex;
`;

const FormGroup = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 5rem;
  @media screen and (min-width: 1550px) {
    max-width: 1550px;
    margin: 0 auto;
  }
`;
const Label = styled.label`
  font-size: 1.5rem;
  color: var(--color-gray);
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray);
  border-radius: 1rem;
  outline: none;
  font-size: 1.5rem;
  color: var(--color-gray);
`;

const AllCollections = () => {

  const [walletAddress, setWalletAddress] = useState(
    "0x50c43fB22155991d0c209f0973273523F9Ad6A94"
  );
  //0x1fEE3385B22d69E93209dB2042BE58fcaC57B59b
  
  //https://www.robinwieruch.de/react-form/
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setWalletAddress(passwordRef.current.value);
    alert("Wallet Address Submitted");
  };

  const { nfts, loading, error } = useNfts(walletAddress);

  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
      console.log(nfts[0].imageUrl);
    })();
  }, [walletAddress]);

  if (loading) {
    return (
      <Section title="NFT Collections" id="allCollection">
        <Paragraph>Loading...</Paragraph>
      </Section>
    );
  }

  if (error) {
    return (
      <Section title="NFT Collections" id="allCollection">
        <Paragraph>Error: {error}</Paragraph>
      </Section>
    );
  }
    

  return (
    <>
      <Section title="NFT Collections" id="allCollection">
      {/* <BackButton>
        <SvgButton>
          <BiArrowBack size={20} />
        </SvgButton>
      </BackButton> */}
        <FormGroup onSubmit={handleSubmit}>
         <Label htmlFor="password1">Wallet Address</Label>
         <Input
         id='password1'
         type='text'
         ref={passwordRef}
         placeholder='Enter your wallet address'
          />
         <Button type="submit">Submit</Button>
        </FormGroup>
        <Fade cascade damping={0.1}></Fade>
        <ImagesContainer mb="1.5rem" mbBreakpoint="1rem">
          {nfts.map((nft, i) => (
            <>
              <ImageContainer key={`${nft.contractAddress}/${nft.tokenId}`}>
                <Image 
                src={nft.imageUrl} 
                alt={nft.name} 
                fill
                placeholder="blur"
                blurDataURL="../../public/space1.jpg"
                />
              </ImageContainer>
            </>
          ))}
        </ImagesContainer>
        <Link href="/">
          <Button>Back to main page</Button>
        </Link>
      </Section>
    </>
  );
};

export default AllCollections;
