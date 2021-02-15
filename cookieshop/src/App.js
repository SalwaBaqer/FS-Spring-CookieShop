import "./App.css";

// Styling
import { Title, Description, ShopImage, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//components
import CookieList from "./components/CookieList";

//theme
const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#fefafb", // main background color
  pink: "#F2637E",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Title>Cookies and Beyond</Title>
        <Description>Delightful piece of heaven</Description>
        <ShopImage
          alt="cookie shop"
          src="https://rinnoo.net/f/CMS/Attachments/2020/11/29/70321_Cookie-Dough_9_-_Qu80_RT1600x1024-_OS1080x1080-_RD1080x1080-.jpg"
        />
        <CookieList />
      </div>
    </ThemeProvider>
  );
}

export default App;
