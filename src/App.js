import "./App.css";
import styled from "styled-components";

import HeaderSection from "./Components/Header/HeaderDate";
import Main from "./Components/SectionMain";
import ProductSection from "./Components/Product/ProductSectin";
import AboutUsSection from "./Components/AboutUs/AboutUsSection";
import FooterSection from "./Components/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <BakeryConrainer>
        <HeaderSection />
        <Main />
        <ProductSection />
        <AboutUsSection />
        <FooterSection />
      </BakeryConrainer>
    </div>
  );
}

export default App;

export const BakeryConrainer = styled("div")`
  background-color: #eef7ff;
`;
