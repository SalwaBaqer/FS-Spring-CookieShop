import React from "react";

// Cookies Data
import cookies from "../cookies";

// Styling
import { ListWrapper } from "../styles";

//components
import CookieItem from "./CookieItem";

const CookieList = () => {
  //cookies list
  const cookieList = cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));
  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
