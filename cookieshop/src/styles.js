import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}

  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.pink};
`;

export const Description = styled.h4`
  margin-left: 20%;
  font-family: Papyrus;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const ListWrapper = styled.div`
  margin-top: 5%;

  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CookieWrapper = styled.div`

margin-left: 1%;

  img {
    width: 250px;
    height: 200px;
   margin-left: 10%
  }
  p{
    margin-left: 19%  
  }
  .cookie-price{
    color: ${(props) => props.theme.pink}
  }

  }
`;
