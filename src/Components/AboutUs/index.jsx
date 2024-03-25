import React from "react";
import {
  AboutSection,
  AboutBlock,
  AboutBlockWrapper,
  AboutBlockImg,
  AboutBlockFirst,
  AboutBlockTitle,
  AboutBlockText,
  AboutWtapperConteinerSmalText,
  AboutConteinerSmalText,
  AboutNumber,
  AboutNumText
} from "./AboutUs.styled-components";

import about_section from "../../img/about_section.png";

const AboutUs = ({ item }) => {
  return (
    <AboutSection id="about us">
      <AboutBlock>
        <AboutBlockImg src={about_section} />
        <AboutBlockWrapper>
          <AboutBlockFirst>
            <AboutBlockTitle>Few words About us</AboutBlockTitle>

            <AboutBlockText>
              Like many design teams, Onfido made the transition from Abstract +
              Sketch, to Figma in the last couple of years. One of the common
              resistance points internally before making that switch, was
              Figma’s lack of Git-style branching that Abstract enabled. The
              design team had come to rely on branching and had built a lot of
              our processes around it.
            </AboutBlockText>
          </AboutBlockFirst>
          <AboutWtapperConteinerSmalText>
            {item.map((el, index) => {
              return (
                <>
                  <AboutConteinerSmalText>
                    <AboutNumber key={index}>{el.number}</AboutNumber>
                    <AboutNumText>{el.text}</AboutNumText>
                  </AboutConteinerSmalText>
                </>
              );
            })}
          </AboutWtapperConteinerSmalText>
        </AboutBlockWrapper>
      </AboutBlock>
    </AboutSection>
  );
};

export default AboutUs;
