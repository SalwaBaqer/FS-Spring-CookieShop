import React from "react";
// Styling
import { ThemeButton, Logo, ToCookieList, NavStyled } from "../styles";

//logo
import logo from "../images/cookie-removebg-preview.png";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div class="navbar-nav center">
        <Logo className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Logo>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <ThemeButton>
            <ToCookieList className="nav-item" to="/cookies">
              Cookies
            </ToCookieList>
          </ThemeButton>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
