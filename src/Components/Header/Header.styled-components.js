import styled from "styled-components";

export const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  @media (max-width: 1400px) {
    padding: 0 40px;
  }
`;
export const HeaderLogo = styled("div")`
  font-size: 25px;
  display: grid;
  align-items: center;
  font-weight: 400;
  z-index: 30;
  padding-top: 15px;
  @media (max-width: 1023px) {
    font-weight: 500;
    padding-top: 25px;
  }
`;
export const HeaderList = styled("ul")`
  display: flex;
  gap: 40px;
  font-size: 16px;

  @media (max-width: 1024px) {
    display: block;
    position: fixed;

    visibility: hidden;
    top: 0;
    left: -100%;
    width: 100%;
    height: 1000px;
    margin: 0;
    padding: 80px 0;
    z-index: 9;

    list-style: none;
    text-align: center;

    background-color: #eef7ff;

    box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  }
`;
export const HeaderItem = styled("li")`
  list-style-type: none;
  margin: auto;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 1024px) {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-size: 20px;
    font-weight: 600;

    text-decoration: none;
    &:hover {
      background-color: #cfd8dc;
    }
  }
`;
export const HeaderItemRed = styled("div")`
  display: flex;
  text-transform: uppercase;
  margin: auto;
  a {
    color: #f9512e;
    font-weight: 500;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
