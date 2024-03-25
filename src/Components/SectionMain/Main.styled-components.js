import styled from "styled-components";

export const MainSection = styled("section")`
  padding: 100px 150px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 24px;
  text-align: end;
  @media (max-width: 769px) {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 16px;
  }
  @media (max-width: 1400px) {
    padding: 100px 80px;
  }
  @media (max-width: 1200px) {
    padding: 100px 30px;
  }
`;
export const MainContainerText = styled("div")`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  align-content: space-between;
  @media (max-width: 769px) {
    grid-column-start: 1;
    grid-column-end: 9;
  }
`;

export const MaintText = styled("p")`
  position: relative;
  top: 100px;
  text-align: start;
  font-size: 16px;
  line-height: 24px;
  color: #1c1a26;

  @media (max-width: 769px) {
    top: 0;
    margin: 0;
  }
  @media (max-width: 1200px) {
    top: 0;
  }
`;
export const MainBtn = styled("button")`
  position: relative;
  font-weight: 500;
  line-height: 16px;
  font-size: 16px;
  text-transform: uppercase;
  color: #f9512e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 56px;
  gap: 10px;
  border: 2px solid #f9512e;
  border-radius: 50px;
  bottom: 50%;
  background-color: unset;
  @media (max-width: 769px) {
    // position: static;
    top: 500px;
  }

  @media (min-width: 769px) {
    left: 50%;
    transform: translate(50%, -50%);
    margin-top: 40px;
    margin-right: -100px;
  }

  @media (min-width: 779px) {
    left: 50%;
    transform: translate(50%, -50%);
    margin-top: 2px;
    margin-right: -90px;
  }

  @media (min-width: 870px) {
    left: 50%;
    transform: translate(50%, -50%);
    margin-top: 2px;

    margin-right: 10px;
  }

  @media (min-width: 940px) {
    left: 50%;
    transform: translate(50%, -50%);
    margin-top: 2px;

    margin-right: 60px;
  }
  @media (min-width: 1000px) {
    left: 50%;
    transform: translate(50%, -50%);
    margin-top: 2px;

    margin-right: 100px;
  }
  @media (min-width: 1024px) {
    left: 0;
    transform: translate(0%, -0%);
    bottom: 100%;
  }
  @media (min-width: 1400px) {
    left: 0;
    transform: translate(0%, -0%);
    bottom: 200%;
  }
`;

export const MainBlockWithImg = styled("div")`
  grid-column-start: 3;
  grid-column-end: 7;
  position: relative;

  @media (max-width: 1023px) {
    img {
      height: 450px;
      margin-bottom: 80px;
    }
  }
  @media (max-width: 769px) {
    position: static;
    img {
      height: 290px;
    }
  }
  @media (min-width: 1400px) {
    img {
      margin-bottom: 80px;

      height: 600px;
    }
  }
  @media (min-width: 1800px) {
    img {
      height: 700px;
    }
  }
`;

export const MainTitle = styled("h1")`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 1023px) {
    font-size: 80px;
    text-align: center;
    margin-top: 170px;
  }
  @media (max-width: 769px) {
    font-size: 60px;
    position: static;
    grid-column-start: 1;
    grid-column-end: 9;
    margin: 0;
  }
  @media (min-width: 1024px) {
    font-size: 100px;

    text-align: center;
    margin-top: 220px;
  }
  @media (min-width: 1199px) {
    margin-top: 210px;
    font-size: 135px;
  }
  @media (min-width: 1300px) {
    margin-top: 230px;
    font-size: 145px;
  }
  @media (min-width: 1800px) {
    margin-top: 270px;
    font-size: 145px;
  }
`;
