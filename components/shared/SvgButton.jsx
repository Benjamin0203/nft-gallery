import styled from "styled-components";

const SvgButton = styled.button`
  position: relative;
  width: ${(props) => props.width || "2.5rem"};
  height: ${(props) => props.height || "2.5rem"};
  border-radius: 50%;
  background: var(--color-black);
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: all ease-in-out 250ms;
  &:focus,
  &:hover {
    &::before,
    &::after {
      opacity: 1;
      transform: translate3d(5px, 5px) scale(1.2);
    }
  }
  &::before {
    transition: all ease-in-out 250ms;
    opacity: 0.4;
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      -45deg,
      var(--color-pink-100) -25%,
      var(--color-purple-100) 120%
    );
    transform: translate3d(5px, 5px) scale(1);
    filter: blur(15px);
    opacity: var(0.65);
    transition: opacity 0.3s;
    border-radius: inherit;
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
    }
  }
  svg {
    color: var(--color-white);
  }
  span,
  h1,
  h2,
  p {
    color: var(--color-white);
    font-weight: 500;
    font-size: ${(props) => props.fontSize || "1rem"};
  }
`;

export default SvgButton;
