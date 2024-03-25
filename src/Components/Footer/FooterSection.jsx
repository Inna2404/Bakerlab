import React from "react";
import Footer from ".";

import iconFacebook from "../../img/icon-facebook.png";
import iconInstagram from "../../img/icon-instagram.png";
import iconTwiter from "../../img/icon-twiter.png";

const menuItem = [
  { name: "Products", link: "products" },
  { name: "About us", link: "about us" },
  { name: "Blog", link: "blog" },
  { name: "Tems & Privacy" }
];

const callItem = [
  { number: "(629) 555-0129" },
  { number: "(603) 555-0123" },
  { number: "(704) 555-0127" }
];

const iconItem = [
  { icon: iconFacebook },
  { icon: iconInstagram },
  { icon: iconTwiter }
];
const FooterSection = () => {
  return <Footer menu={menuItem} call={callItem} icon={iconItem} />;
};

export default FooterSection;
