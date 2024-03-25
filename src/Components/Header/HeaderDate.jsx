import React from "react";
import Header from ".";

const headerDate = [
  { name: "Products", link: "products" },
  { name: "About us", link: "about us" },
  { name: "Blog", link: "blog" }
];

const HeaderSection = () => {
  return <Header date={headerDate} />;
};
export default HeaderSection;
