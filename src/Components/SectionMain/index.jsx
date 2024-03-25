import React from "react";
import {
  MainSection,
  MainContainerText,
  MaintText,
  MainBtn,
  MainTitle,
  MainBlockWithImg
} from "./Main.styled-components";

import mainImg from "../../img/roast.png";

const Main = () => {
  return (
    <MainSection id="bakerlab">
      <MainContainerText>
        <MaintText>
          We bake your fantasies-croissants, cakes, cookies, and cupcakes.
        </MaintText>
        <MainBtn>
          <div className="main_btn"></div>
          Learn more
        </MainBtn>
      </MainContainerText>
      <MainTitle>creative Bakery</MainTitle>
      <MainBlockWithImg>
        <img src={mainImg} width="100%" height="590px" />
      </MainBlockWithImg>
    </MainSection>
  );
};
export default Main;
