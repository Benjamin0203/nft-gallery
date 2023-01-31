import styled from "styled-components";
import {
  GradientCircleLight,
  GradientCircleDark,
  GradientCircleTopLeft,
} from "./shared/GradientCircles";
import Navbar from "./Navbar";
import SvgButton from "./shared/SvgButton";
import { FiSearch, FiArrowUp } from "react-icons/fi";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const InnerLayout = styled.div`
  position: relative;
  z-index: 2;
  min-height: 200vh;
`;

const Search = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 1.5rem;
  left: var(--padding-wrapper);
  display: flex;
`;

const ScrollToTop = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 1.5rem;
  right: var(--padding-wrapper);
  display: flex;
  svg {
    transition: all 0.3s ease;
  }
  &:hover {
    svg {
      transform: translateY(-2px);
    }
  }
`;

//SEARCH
const SearchContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300px;
  background: rgb(19, 15, 21);
  transition: transform ease-in-out 250ms;
  transition-delay: 150ms;
  transform: ${(props) =>
    props.show ? "translateY(0%)" : "translateY(-100%)"};
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInputContainer = styled.div`
  border-bottom: 1px solid var(--color-gray);
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
  transition: border ease-in-out 250ms;
  &:focus,
  &:focus-within {
    border-color: var(--color-pink-100);
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  padding: 0.2rem 0.2rem 0 0.2rem;
  transition: border ease-in-out 250ms;
  &:focus,
  &:focus-within {
    border: 1px solid var(--color-pink-100);
  }
  svg {
    color: var(--color-white);
    width: 40px;
    height: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-white);
  font-size: 1.5rem;
`;

const SearchBg = styled.div`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 250ms;
  transform: ${(props) => (props.show ? "translateY(0%)" : "translateY(100%)")};
`;

const PageLayout = ({ children }) => {
  const [search, setSearch] = useState(false);
  return (
    <Container>
      <GradientCircleTopLeft />
      <GradientCircleLight />
      <GradientCircleDark />
      <Navbar />
      <Search>
        <SvgButton onClick={() => setSearch(true)}>
          <FiSearch size={20} />
        </SvgButton>
      </Search>
      <ScrollToTop>
        <SvgButton
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FiArrowUp size={20} />
        </SvgButton>
      </ScrollToTop>
      <InnerLayout>{children}</InnerLayout>

      {/* SEARCH */}
      <SearchContainer show={search}>
        <SearchInputContainer>
          <Input type='text' placeholder='Search Here...' />
          <SearchButton>
            <FiSearch />
          </SearchButton>
        </SearchInputContainer>
      </SearchContainer>

      {/* SEARCH BG */}
      <SearchBg show={search} onClick={() => setSearch(false)} />
    </Container>
  );
};

export default PageLayout;
