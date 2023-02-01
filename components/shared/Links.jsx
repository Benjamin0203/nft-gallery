import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "1.5rem")};
  justify-content: ${(props) =>
    props.justify === "center"
      ? "center"
      : props.justify === "end"
      ? "flex-end"
      : "flex-start"};
  align-items: ${(props) =>
    props.align === "center"
      ? "center"
      : props.align === "end"
      ? "flex-end"
      : "flex-start"};
`;

const StyledLink = styled.a`
  position: relative;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.2rem;
  color: var(--color-white);
  overflow: hidden;
  background: linear-gradient(
    to right,
    white,
    white 50%,
    var(--color-pink-100) 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 0%;
  transition: all ease-in-out 250ms;
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-pink-100);
    transition: all ease-in-out 250ms;
  }
  &:hover,
  &:focus {
    background-position: 100% 0%;
    &::after {
      width: 100%;
      height: 2px;
    }
  }
`;

const Links = ({ col, gap, align, justify, onClick }) => {
  return (
    <List col={col} gap={gap} align={align} justify={justify}>
      <li onClick={onClick}>
        <Link href="/">
          <StyledLink>Intro</StyledLink>
        </Link>
      </li>
      <li onClick={onClick}>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
      </li>

      {/* <li onClick={onClick}>
        <Link href='about'>
          <StyledLink>About</StyledLink>
        </Link>
      </li>
      <li onClick={onClick}>
        <Link href='contact'>
          <StyledLink>Contact</StyledLink>
        </Link>
      </li> */}
    </List>
  );
};

export default Links;
