import React from "react";

import product_1 from "../../img/product_1.png";
import product_2 from "../../img/product_2.png";
import product_3 from "../../img/product_3.png";
import product_4 from "../../img/product_4.png";
import product_5 from "../../img/product_5.png";
import product_6 from "../../img/product_6.png";

import icon_arrow from "../../img/icon-arrow.png";
import Product from ".";

const productItem = [
  {
    img: product_1,
    title: "Cakes",
    text: "Oatmeal cookies with golden raisins, orange zest and chocolate chips",
    imgArrow: icon_arrow,
    smallText: "Order"
  },
  {
    img: product_2,
    title: "Cakes",
    text: "Chocolate biscuit coffee cake topped with a buttercream and powder",
    imgArrow: icon_arrow,
    smallText: "Order"
  },
  {
    img: product_3,
    title: "Donuts",
    text: "Light multi-layered croissant strewn with cinammon and almond “petals”",
    imgArrow: icon_arrow,
    smallText: "Order"
  },
  {
    img: product_4,
    title: "Donuts",
    text: "Light multi-layered croissant strewn with coconut and nuts",
    imgArrow: icon_arrow,
    smallText: "Order"
  },
  {
    img: product_5,
    title: "Cakes",
    text: "Chocolate salted caramel, Vanilla frutti pebbles",
    imgArrow: icon_arrow,
    smallText: "Order"
  },
  {
    img: product_6,
    title: "Cookies",
    text: "Oatmeal cookies with golden raisins, orange zest and chocolate chips",
    imgArrow: icon_arrow,
    smallText: "Order"
  }
];

const ProductSection = () => {
  return <Product item={productItem} />;
};

export default ProductSection;
