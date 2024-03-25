import React from "react";
import AboutUs from ".";

const aboutItem = [
  {
    number: "2015",
    text: "Foundation year"
  },
  {
    number: "23",
    text: "Stores"
  },
  {
    number: "155",
    text: "Companies"
  },
  {
    number: "10k+",
    text: "Clients"
  }
];

const AboutUsSection = () => {
  return <AboutUs item={aboutItem} />;
};

export default AboutUsSection;
