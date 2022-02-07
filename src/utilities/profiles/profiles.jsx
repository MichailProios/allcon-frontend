import React from "react";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

import pic from "../images/Logos/logo-new.png";
import george from "../images/temp/georgeproios.jpg";
import markos from "../images/temp/markobistakis.jpg";
import joseph from "../images/temp/josephgrant.JPG";

export const profiles = [
  {
    link: "/About/GeorgeProios",
    picture: george,
    title: "",
    subtitle: "",
    description: "",
  },
  {
    link: "/About/MarkosBistakis",
    picture: george,
    title: "",
    subtitle: "",
    description: "",
  },
  {
    link: "/About/JosephGrant",
    picture: george,
    title: "",
    subtitle: "",
    description: "",
  },
];

export default profiles;
