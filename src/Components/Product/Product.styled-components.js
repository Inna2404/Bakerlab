import styled from "styled-components";

export const ProductSection = styled("div")`
  margin: 100px 150px;
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  @media (max-width: 1400px) {
    margin: 100px 80px;
  }
  @media (max-width: 1200px) {
    margin: 100px 30px;
  }
`;

export const ProductSectionTitle = styled("h2")`
  color: #1c1a26;
  font-size: 72px;
  font-weight: 400px;
  line-height: 61px;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 1200px) {
    font-size: 56px;
  }
`;
export const ProductsBlock = styled("div")`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 24px;
`;

export const ProductBlock = styled("div")`
  margin-top: 100px;
  grid-template-columns: repeat(2, 1fr); /* По дві картинки в ряду */

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  &:nth-child(2) {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  &:nth-child(3) {
    grid-column-start: 3;
    grid-column-end: 6;
  }
  &:nth-child(4) {
    grid-column-start: 6;
    grid-column-end: 9;
  }
  &:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  &:nth-child(6) {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  @media (max-width: 1024px) {
    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    &:nth-child(2) {
      grid-column-start: 5;
      grid-column-end: 9;
    }

    &:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    &:nth-child(4) {
      grid-column-start: 5;
      grid-column-end: 9;
    }
    &:nth-child(5) {
      grid-column-start: 1;
      grid-column-end: 5;
    }
    &:nth-child(6) {
      grid-column-start: 5;
      grid-column-end: 9;
    }
  }


  @media (max-width: 768px) {
    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 9;
    }
    &:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 9;
    }

    &:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 9;
    }
    &:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 9;
    }
    &:nth-child(5) {
      grid-column-start: 1;
      grid-column-end: 9;
    }
    &:nth-child(6) {
      grid-column-start: 1;
      grid-column-end: 9;
    }


`;
export const ProductIcon = styled("div")`
  display: inline-flex;
`;

export const ProductTextSmall = styled("p")`
  text-transform: uppercase;
  color: #f9512e;
  font-weight: 500;
  font-sixe: 16px;
  line-height: 16px;
`;

export const ProductTitle = styled("h3")`
  color: #7f8096;
  text-align: start;
  text-transform: uppercase;
`;

export const ProductText = styled("p")`
  text-align: start;
  color: #1c1a26;
  font-size: 16px;
  line-heght: 24px;
`;
export const ProductImg = styled("img")`
  text-align: unset;
  height: 560px;

  @media (max-width: 1200px) {
    height: 450px;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
`;
