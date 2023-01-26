import styled from "styled-components";

const Box = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "max-content"};
  display: ${(props) => (props.flex ? "flex" : "block")};
  flex-direction: ${(props) =>
    props.col ? "column" : props.row ? "row" : "unset"};
  gap: ${(props) => props.gap || "unset"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "unset")};
  @media screen and (max-width: ${(props) => props.breakpoint || "unset"}) {
    flex-direction: ${(props) =>
      props.colMobile ? "column" : props.rowMobile ? "row" : ""};
  }
  align-items: ${(props) => props.alignMobile || "unset"};
  justify-items: ${(props) => props.justifyMobile || "unset"};
  gap: ${(props) => props.gapMobile || props.gap || "0"};
`;

export default Box;
