import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #f23d5e;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CookieWrapper = styled.div`
  margin-top: 20px;

  img {
    width: 250px;
    height: 200px;
  }

  p {
    text-align: center;
    &.cookie-price {
      color: ${(props) => props.theme.pink};
      font-weight: bold;
    }
  }
`;
