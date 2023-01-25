import styled from "styled-components";

const OutlineText = styled.span`
  font-weight: 500;
  color: var(--color-purple-800);
  background: -webkit-linear-gradient(
    -65deg,
    var(--color-seaGreen) 5%,
    var(--color-seaGreen) 53%,
    var(--color-seaGreen) 91%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
`;

export default OutlineText;