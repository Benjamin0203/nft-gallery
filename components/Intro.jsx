import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import ButtonGradient from "./shared/ButtonGradient";
import Container from "./shared/Container";
import Carousel from "./Carousel";
import OutlineText from "./shared/OutlineText";

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

const InfoContainer = styled.div`
  background: #e6e3e2;
  padding: 7.5rem 0rem;
  border-top: 1px solid var(--color-red-100);
  border-bottom: 1px solid var(--color-red-100);
`;

const InfoInner = styled(Container)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3px;
  }
`;

const BigText = styled(OutlineText)`
  font-size: 4rem;
  @media screen and (max-width: 1000px) {
    font-size: 2.5rem;
  }
`;

const SmallText = styled.span`
  font-size: 1rem;
  color: var(--color-gray);
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: var(--color-purple-200);
  @media screen and (max-width: ${(props) => props.breakpoint || "1000px"}) {
    display: ${(props) => (props.hideOnMobile ? "none" : "block")};
  }
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
        <Carousel />
      </Fade>
      <Description>
        This is a test description
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint qui ab consequuntur eius inventore officiis minima, aliquam excepturi doloribus non quod quis, voluptatum a culpa quisquam maiores quas libero impedit?
      </Description>
      <Button>Purchase NFT</Button>
      </Container>

      <InfoContainer>
      <InfoInner>
          <Fade cascade damping={0.1}>
            <Info>
              <div className='container'>
                <BigText>600</BigText>
                <SmallText>Total NFTs</SmallText>
              </div>
            </Info>
            <Line />
            <Info>
              <div className='container'>
                <BigText>465</BigText>
                <SmallText>Total Owners</SmallText>
              </div>
            </Info>
            <Line hideOnMobile />

            <Info>
              <div className='container'>
                <BigText>2.4</BigText>
                <SmallText>{`Floor Price (ETH)`}</SmallText>
              </div>
            </Info>
            <Line />

            <Info>
              <div className='container'>
                <BigText>112k+</BigText>
                <SmallText>{`Volume Traded (ETH)`}</SmallText>
              </div>
            </Info>
          </Fade>
        </InfoInner>
      </InfoContainer>
    </section>
  );
}
