import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0rem var(--padding-wrapper);
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1550px) {
    max-width: 1550px;
    margin: 0 auto;
  }
`;

export default Container;
