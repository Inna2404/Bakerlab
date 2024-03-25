import styled from "styled-components";

export const AboutSection = styled("div")`
  margin: 100px 150px;
  position: relative;
  @media (max-width: 1400px) {
    margin: 100px 80px;
  }
  @media (max-width: 1200px) {
    margin: 100px 40px;
  }
`;
export const AboutBlock = styled("div")`
  grid-column-gap: 24px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const AboutBlockWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
`;

export const AboutBlockFirst = styled("div")`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
`;
export const AboutBlockTitle = styled("h2")`
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 62px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 61px;
  color: #1c1a26;
  @media (max-width: 1200px) {
    font-size: 54px;
    grid-column-start: 1;
    grid-column-end: 5;
  }
  @media (max-width: 768px) {
    font-size: 34px;
  }
`;
export const AboutBlockText = styled("p")`
  grid-column-start: 5;
  grid-column-end: 9;

  color: #1c1a26;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: auto;
`;
export const AboutWtapperConteinerSmalText = styled("div")`
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin: 0;
    padding: 0;
  }
  @media (min-width: 770px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (min-width: 1070px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media (min-width: 1124px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 45px;
  }
`;
export const AboutConteinerSmalText = styled("div")`
  grid-column: span 2;

  @media (min-width: 769px) {
    grid-column: span 1;
    height: 144px;
  }
  @media (min-width: 1024px) {
    grid-column: span 2;
  }
`;

export const AboutNumber = styled("div")`
  margin-top: 120px;
  font-size: 96px;
  font-weight: 400;
  line-height: 62px;
  color: #1c1a26;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const AboutNumText = styled("p")`
  font-size: 16px;
  line-height: 24px;
  color: #7f8096;
  font-weight: 400;
  margin-top: 25px;
`;

export const AboutBlockImg = styled("img")`
  // background-size: cover;
  background-repeat: no-repeat;
  grid-column: 3 / span 7;
  height: 700px;

  @media (max-width: 1200px) {
    height: 493px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;
