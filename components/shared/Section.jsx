import React from "react";
import Container from "./Container";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "0"};
  padding-bottom: 5rem;
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
`;
const Divisive = styled.div`
  width: 100%;
  display: ${(props) => props.divisiveDisplay || "flex"};
  align-items: center;
  gap: 1.5rem;
  margin: 5rem 0;
  .line {
    width: 100%;
    height: 1px;
    background-color: var(--color-red-100);
  }
  .circle {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    outline: 2px solid var(--color-red-100);
    flex-shrink: 0;
  }
  .center {
    width: 8rem;
    height: 0.5rem;
    border-radius: 12px;
    outline: 2px solid var(--color-red-100);
    flex-shrink: 0;
  }
`;
const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 5rem;
  text-align: center;
  text-shadow: 2px 2px var(--color-seaGreen);
  color: var(--color-black);
  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export default function Section({ 
  id,
  children,
  title,
  gap,
  mt,
  mb,
  ml,
  mr,
  divisiveDisplay,}){
  return (
    <>
    <Divisive divisiveDisplay={divisiveDisplay}>
      <div className="line" />
      <div className="circle" />
      <div className="center" />
      <div className="line" />
    </Divisive>
    <Container>
      <Wrapper id={id} gap={gap} mt={mt} mb={mb} ml={ml} mr={mr}>
        <Title>{title}</Title>
        {children}
      </Wrapper>
    </Container>
    </>
  )
};
