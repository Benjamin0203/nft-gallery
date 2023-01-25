import styled from "styled-components";
const ButtonGradient = styled.button`
  --borderWidth: 5px;
  cursor: pointer;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-white);
  padding: 0.5rem 1rem;
  background: var(--color-seaGreen);
  position: relative;
  border-radius: var(--borderWidth);
  border: 2px solid var(--color-red-500);
  transition: all ease-in-out 150ms;
  &:hover {
    border-color: transparent;
    &:after {
      opacity: 1;
    }
  }
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      var(--color-red-100),
      var(--color-red-200),
      var(--color-red-300),
      var(--color-red-400),
      var(--color-red-500),
      var(--color-red-600),
      var(--color-red-700),
      var(--color-red-800)
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
    transition: opacity ease-in-out 250ms;
  }
  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default ButtonGradient;
