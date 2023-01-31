import Section from "../../components/shared/Section";
import { Fade } from "react-awesome-reveal";
import Story from "../../components/Story";

export default function About() {
  return (
    <Section id="about" title="ABOUT US" divisiveDisplay="none" mt={"5rem"}>
      <Fade style={{ marginBottom: "3rem" }}>
        <Story />
      </Fade>
    </Section>
  );
}
