import styled from "styled-components";

const GradientCircleLight = styled.div`
  position: fixed;
  top: 90%;
  left: 15%;
  width: 300px;
  height: 250px;
  transform: translate(-15%, -90%);
  border-radius: 800px;
  background-image: linear-gradient(
    45deg,
    var(--color-purple-100),
    var(--color-purple-200)
  );
  -webkit-filter: blur(120px);
  filter: blur(120px);
`;

const GradientCircleDark = styled.div`
  position: fixed;
  top: 20%;
  right: 0%;
  transform: translate(0%, -20%);
  width: 400px;
  height: 350px;
  border-radius: 1000px;
  background-image: linear-gradient(
    45deg,
    var(--color-purple-100),
    var(--color-purple-700)
  );

  -webkit-filter: blur(140px);
  filter: blur(140px);
`;

const GradientCircleTopLeft = styled.div`
  position: fixed;
  top: -20%;
  left: -11%;
  width: 400px;
  height: 350px;
  border-radius: 1000px;
  background-image: linear-gradient(
    45deg,
    var(--color-purple-100),
    var(--color-purple-700)
  );

  -webkit-filter: blur(140px);
  filter: blur(140px);
`;

export { GradientCircleLight, GradientCircleDark, GradientCircleTopLeft };