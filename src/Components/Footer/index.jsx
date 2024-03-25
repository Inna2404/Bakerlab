import React from "react";

import {
  FooterContainer,
  FooterContainerWrapper,
  FotterBlockFirst,
  FotterBlockFirstSubTitle,
  FotterBlockFirstTitle,
  FooterSecondTitle,
  FotterBlockSecond,
  FotterBlockSecondMenuList,
  FotterBlockSecondMenuItem,
  FotterBlockSecondCallList,
  FotterBlockSecondCallItem,
  FotterBlockSecondEmailList,
  FotterBlockSecondEmailItem,
  FotterBlockThird,
  ImgFooter
} from "./Footer.styled-components";

const Footer = ({ menu, call, icon }) => {
  return (
    <FooterContainer id="contact us">
      <FooterContainerWrapper>
        <FotterBlockFirst>
          <FotterBlockFirstSubTitle>
            <a href="#bakerlab">Bakerlab</a>
          </FotterBlockFirstSubTitle>
          <FotterBlockFirstTitle>Contact us</FotterBlockFirstTitle>
        </FotterBlockFirst>
        <FotterBlockSecond>
          <FotterBlockSecondMenuList>
            <FooterSecondTitle>menu</FooterSecondTitle>
            {menu.map((el, index) => {
              return (
                <>
                  <FotterBlockSecondMenuItem key={index}>
                    <a href={`#${el.link}`}>{el.name}</a>
                  </FotterBlockSecondMenuItem>
                </>
              );
            })}
          </FotterBlockSecondMenuList>

          <FotterBlockSecondCallList>
            <FooterSecondTitle>Call us</FooterSecondTitle>
            {call.map((el, index) => {
              return (
                <>
                  <FotterBlockSecondCallItem key={index}>
                    {el.number}
                  </FotterBlockSecondCallItem>
                </>
              );
            })}
          </FotterBlockSecondCallList>
          <FotterBlockSecondEmailList>
            <FooterSecondTitle>email us</FooterSecondTitle>
            <FotterBlockSecondEmailItem>
              <a href="https://mail.google.com/mail/" target="_blank">
                bakerlab@example.com
              </a>
            </FotterBlockSecondEmailItem>
          </FotterBlockSecondEmailList>
        </FotterBlockSecond>

        <FotterBlockThird>
          <div>
            {icon.map((el, index) => {
              return (
                <a href="#">
                  <ImgFooter src={el.icon} width="22px" height="22px" />
                </a>
              );
            })}
          </div>
          <p>© Bakerlab 2022</p>
        </FotterBlockThird>
      </FooterContainerWrapper>
    </FooterContainer>
  );
};
export default Footer;
