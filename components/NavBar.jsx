import styled from "styled-components";
import { FaBars, FaTimes, FaDiscord } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import SvgButton from "./shared/SvgButton";
import { IoWalletOutline } from "react-icons/io5";
import ButtonGradient from "./shared/ButtonGradient";
import Links from "./shared/Links";
import Box from "./shared/Box";
import Image from "next/image";

const Container = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: ${(props) => (props.stickyNav ? "1.5rem 2rem" : "2rem")};
  background: ${(props) =>
    props.stickyNav ? "var(--color-purple-600)" : "transparent"};
  transition: all ease-in-out 350ms;
  &::after {
    position: absolute;
    transition: width ease-in-out 250ms;
    content: "";
    left: 0;
    bottom: 0;
    width: ${(props) => (props.stickyNav ? "100%" : "0%")};
    height: 1px;
    background: var(--color-purple-200);
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .logo {
    font-family: "Dosis", sans-serif !important;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-white);
  }
`;

const Navigation = styled.nav`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Button = styled(ButtonGradient)`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MobileButtonWallet = styled(SvgButton)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const NavMobileContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  width: 350px;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(19, 15, 21);
  transition: transform ease-in-out 250ms;
  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
  overflow-y: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const NavMobileInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 4rem;
  min-height: 750px;
`;

const NavMobile = styled.nav`
  width: 100%;
`;

const NavMobileBtn = styled(ButtonGradient)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 200px;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
`;

const NavMobileBg = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 250ms;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
`;

const Paragraph = styled.p`
  max-width: 200px;
  text-align: center;
  color: var(--color-gray);
  font-size: 0.7rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
  svg {
    color: var(--color-gray);
  }
`;

const IconContainer = styled.a`
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  width: 350px;
  height: 100vh;
  top: 0;
  right: 0;
  background: rgb(19, 15, 21);
  transition: transform ease-in-out 250ms;
  transform: ${(props) => (props.show ? "translateX(0%)" : "translateX(100%)")};
  overflow-y: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: var(--color-white);
  font-size: 1.3rem;
`;

const WalletInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1rem;
  min-height: 750px;
`;

const WalletBg = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 250ms;
  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
`;

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [wallet, setWallet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) setStickyNav(true);
      else setStickyNav(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    console.log(stickyNav);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNavbarMobile = () => setNavbarMobile(false);

  return (
    <Container stickyNav={stickyNav}>
      {/* TOP NAVBAR */}
      <Inner>
        <LogoContainer>
          <SvgButton onClick={() => setNavbarMobile(true)}>
            <FaBars size={20} />
          </SvgButton>
          <Link href="#">
            <a className="logo">NFT Gallery</a>
          </Link>
        </LogoContainer>
        <Navigation>
          <Links />
        </Navigation>
        <Button onClick={() => setWallet(true)}>CONNECT TO WALLET</Button>
        <MobileButtonWallet onClick={() => setWallet(true)}>
          <IoWalletOutline size={24} />
        </MobileButtonWallet>
      </Inner>

      {/* MOBILE NAVBAR */}
      <NavMobileContainer show={navbarMobile}>
        <SvgButton
          style={{ marginTop: "1rem", marginLeft: "1rem" }}
          onClick={closeNavbarMobile}
        >
          <FaTimes size={20} />
        </SvgButton>
        <NavMobileInner>
          {/* BUTTON - LINKS */}
          <div>
            <Link href="https://opensea.io/" passHref={true} target="_blank">
              <NavMobileBtn as="a" mb="1.5rem" onClick={closeNavbarMobile}>
                <SvgButton>
                  <GiSailboat size={20} />
                </SvgButton>
                <span>OPENSEA</span>
              </NavMobileBtn>
            </Link>
         
            <Link href="https://discord.gg/opensea" passHref={true}>
              <NavMobileBtn as="a" onClick={closeNavbarMobile}>
                <SvgButton>
                  <FaDiscord size={20} />
                </SvgButton>
                <span>DISCORD</span>
              </NavMobileBtn>
            </Link>
          </div>
          {/* LIST OF LINKS */}
          <NavMobile>
            <Links
              col
              justify="center"
              align="center"
              onClick={closeNavbarMobile}
            />
          </NavMobile>
          {/* MISC */}
          <div>
            <Paragraph>{`Copyright 2023 - Benjamin Meng `}</Paragraph>
            <IconBox>
              <Link href="https://github.com/Benjamin0203" passHref>
                <IconContainer>
                  <AiFillGithub size={20} />
                  </IconContainer>
              </Link>
              <Link href="https://www.linkedin.com/in/benjaminmeng0203/" passHref>
                <IconContainer>
                  <FaLinkedin size={20} />
                </IconContainer>
              </Link>
           
            </IconBox>
          </div>
        </NavMobileInner>
      </NavMobileContainer>
      <NavMobileBg onClick={closeNavbarMobile} show={navbarMobile} />

      {/* WALLET */}
      <WalletContainer show={wallet}>
        <SvgButton
          style={{ marginTop: "1rem", marginLeft: "1rem" }}
          onClick={() => setWallet(false)}
        >
          <FaTimes size={20} />
        </SvgButton>
        <WalletInner>
          <Title>CONNECT WALLET</Title>
          <Paragraph>
            Connect with one of our available wallet providers or create a new
            one.
          </Paragraph>
          <Link href="#">
            <NavMobileBtn as="a" onClick={() => setWallet(false)}>
              <SvgButton>
                <Image
                  src="/metamask.svg"
                  width={40}
                  height={40}
                  objectFit="contain"
                  alt=""
                />
              </SvgButton>
              <span>METAMASK</span>
            </NavMobileBtn>
          </Link>
          <Link href="#">
            <NavMobileBtn as="a" onClick={() => setWallet(false)}>
              <SvgButton>
                <Image
                  src="/coinbase.svg"
                  width={80}
                  height={80}
                  objectFit="cover"
                  alt=""
                />
              </SvgButton>
              <span>COINBASE</span>
            </NavMobileBtn>
          </Link>
          <Link href="#">
            <NavMobileBtn as="a" onClick={() => setWallet(false)}>
              <SvgButton>
                <Image
                  src="/walletconnect.svg"
                  width={80}
                  height={80}
                  objectFit="cover"
                  alt=""
                />
              </SvgButton>
              <span>WALLETCONNECT</span>
            </NavMobileBtn>
          </Link>
        </WalletInner>
      </WalletContainer>
      <WalletBg show={wallet} onClick={() => setWallet(false)} />
    </Container>
  );
};

export default Navbar;
