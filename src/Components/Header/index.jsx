import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderList,
  HeaderItem,
  HeaderItemRed
} from "./Header.styled-components";

import iconPhone from "../../img/icon-phone.png";
import styled from "styled-components";

export const MenuBtn = styled("label")`
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;

  width: 26px;
  height: 26px;

  cursor: pointer;
  z-index: 10;

  & > span,
  & > span::before,
  & > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
  }
  & > span::before {
    content: "";
    top: -8px;
  }
  & > span::after {
    content: "";
    top: 8px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
export const BurgerMenu = styled("div")`
  z-index: 20;
`;
export const MenuToggle = styled("input")`
  opacity: 0;

  &:checked ~ ${MenuBtn} > span {
    transform: rotate(45deg);
  }
  &:checked ~ ${MenuBtn} > span::before {
    top: 0;
    transform: rotate(0);
  }
  &:checked ~ ${MenuBtn} > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  &:checked ~ ${HeaderList} {
    visibility: visible;
    left: 0;
  }
`;

const Header = ({ date }) => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <a href="#bakerlab">Bakerlab</a>
      </HeaderLogo>

      <BurgerMenu>
        <MenuToggle id="menuToggle" type="checkbox" />

        <MenuBtn htmlFor="menuToggle">
          <span></span>
        </MenuBtn>

        <HeaderList>
          {date.map((item, index) => {
            return (
              <HeaderItem key={index}>
                <a href={`#${item.link}`}>{item.name}</a>
              </HeaderItem>
            );
          })}
          <HeaderItemRed>
            <img src={iconPhone} width="24px" height="24px" />
            <span>
              <a href="#contact us">Contact us</a>
            </span>
          </HeaderItemRed>
        </HeaderList>
      </BurgerMenu>
    </HeaderContainer>
  );
};
export default Header;
