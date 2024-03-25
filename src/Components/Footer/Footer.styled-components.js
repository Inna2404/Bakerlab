import styled from "styled-components";

export const FooterContainer = styled("footer")`
  padding: 100px 150px;
  display: grid;
  background-color: #1c1a26;
  color: #fff;
  @media (max-width: 1400px) {
    padding: 100px 80px;
  }
  @media (max-width: 1200px) {
    padding: 60px 40px;
    margin-top: 300px;
  }
  @media (max-width: 768px) {
    margin-top: 845px;
  }
  @media (max-width: 510px) {
    margin-top: 1145px;
  }
`;
export const FooterContainerWrapper = styled("div")``;
export const FotterBlockFirst = styled("div")`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 24px;
`;
export const FotterBlockFirstSubTitle = styled("h3")`
  font-size: 30px;
  margin: auto 0;
  grid-column-start: 1;
  grid-column-end: 3;

  a {
    color: #fff;
  }
`;
export const FotterBlockFirstTitle = styled("h2")`
  font-size: 72px;

  line-height: 61.2px;
  grid-column-start: 5;
  grid-column-end: 9;
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 9;
    font-size: 60px;
  }
`;

export const FotterBlockSecond = styled("div")`
  display: grid;

  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 24px;
`;

export const FooterSecondTitle = styled("p")`
  color: #7f8096;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
`;
export const FotterBlockSecondMenuList = styled("ul")`
  list-style-type: none;
  grid-column-start: 1;
  padding: 0;

  grid-column-end: 3;
`;
export const FotterBlockSecondMenuItem = styled("li")`
  padding-bottom: 15px;
  a {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  a:hover {
    color: #7f8096;
  }
`;

export const FotterBlockSecondCallList = styled("ul")`
  list-style-type: none;
  padding: 0;

  grid-column-start: 5;
  grid-column-end: 7;
`;
export const FotterBlockSecondCallItem = styled("li")`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
`;
export const FotterBlockSecondEmailList = styled("ul")`
  list-style-type: none;
  padding: 0;
  grid-column-start: 7;
  grid-column-end: 9;

  @media (max-width: 1200px) {
    grid-column-start: 5;
    grid-column-end: 9;
    margin: 0;
    padding: 0;
    margin-top: -45px;
  }
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 9;
    margin-top: 20px;
  }
`;
export const FotterBlockSecondEmailItem = styled("li")`
  a {
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  a:hover {
    color: #7f8096;
  }
`;

export const FotterBlockThird = styled("div")`
  display: grid;
  padding: 0;

  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 24px;

  @media (max-width: 1200px) {
    margin-top: 20px;
  }
  div {
    grid-column-start: 1;
    grid-column-end: 2;
    margin: auto 0;
  }
  a {
    padding-right: 30px;
    color: #fff;
    @media (max-width: 1400px) {
      padding-right: 25px;
    }
    @media (max-width: 1200px) {
      padding-right: 8px;
    }
  }

  p {
    grid-column-start: 4;
    grid-column-end: 7;
    color: #7f8096;
  }
`;
export const ImgFooter = styled("img")`
  transition: filter 0.3s ease; 

  &:hover {
    filter: grayscale(100%) opacity(80%); 
`;
