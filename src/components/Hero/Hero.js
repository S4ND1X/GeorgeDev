import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          GeorgeDev <br />
          .sayHello("🚀 Welcome");
        </SectionTitle>
        <SectionText>
          I'm Jorge Sanchez, I've been passionate about technology since I was a
          kid, I like to experiment with new technologies whenever I can
        </SectionText>
        <Button
          onClick={() => {
            window.location.href = "mailto: georgesanchez.diazjr@gmail.com";
          }}
        >
          Contact me
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
