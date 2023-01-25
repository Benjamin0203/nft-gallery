import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import ButtonGradient from "./shared/ButtonGradient";
import Container from "./shared/Container";
import Carousel from "./Carousel";

const Title = styled.h1`
color: var(--color-black);
font-family: system-ui;
font-size: 4rem;
font-weight: 500;
text-align: center;
text-shadow: 2px 2px var(--color-seaGreen);
`;

const Description = styled.p`
  margin-block: 3rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray);
  max-width: 650px;
  align-self: center;
`;


const Button = styled(ButtonGradient)`
align-self: center;
margin-bottom: 5rem;
`

export default function Intro() {
  return (
    <section id="#">
      <Container>
      <Title>NFT Gallery</Title>   
      <Fade>
        <p>I will gently appear as I enter the viewport</p>
        <Carousel />
      </Fade>
      <Description>
        This is a test description
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint qui ab consequuntur eius inventore officiis minima, aliquam excepturi doloribus non quod quis, voluptatum a culpa quisquam maiores quas libero impedit?
      </Description>
      <Button>Purchase NFT</Button>
      </Container>
    </section>
  );
}
