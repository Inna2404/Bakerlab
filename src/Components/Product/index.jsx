import React from "react";

import {
  ProductSection,
  ProductSectionTitle,
  ProductBlock,
  ProductsBlock,
  ProductImg,
  ProductText,
  ProductTitle,
  ProductIcon,
  ProductTextSmall
} from "./Product.styled-components";

const Product = ({ item }) => {
  return (
    <ProductSection id="products">
      <ProductSectionTitle>What we bake</ProductSectionTitle>
      <ProductText>
        We can customize our coolies righ for your needs. Just imagine it
      </ProductText>
      <ProductsBlock>
        {item.map((el, index) => {
          return (
            <>
              <ProductBlock>
                <ProductImg src={el.img} alt={el.title} width="100%" />
                <ProductTitle key={index}>{el.title}</ProductTitle>
                <ProductText>{el.text}</ProductText>
                <ProductIcon>
                  <img src={el.imgArrow} alt="Arrow" />
                  <ProductTextSmall>{el.smallText}</ProductTextSmall>
                </ProductIcon>
              </ProductBlock>
            </>
          );
        })}
      </ProductsBlock>
    </ProductSection>
  );
};
export default Product;
