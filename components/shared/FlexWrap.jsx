import styled from "styled-components";

const FlexWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: ${(props) => props.gap || "0"};
  @media screen and (max-width: ${(props) => props.breakpoint || "1024px"}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default FlexWrap;