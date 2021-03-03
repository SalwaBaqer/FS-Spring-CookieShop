import React from "react";

//store
import cookieStore from "../stores/cookieStore";

// Styling
import { ListWrapper } from "../styles";

//components
import CookieItem from "./CookieItem";

const CookieList = () => {
  //cookies list
  const cookieList = cookieStore.cookies.map((cookie) => (
    <CookieItem cookie={cookie} key={cookie.id} />
  ));

  return <ListWrapper>{cookieList}</ListWrapper>;
};

export default CookieList;
