import React from "react";
// Routing
import { NavLink, useNavigate } from "react-router-dom";
// Facade
import { facade } from "../../apiFacade";
// Styles
import { BlackBar, Content, Menu, Title, Line } from "./Header.styles";

function Header({ loggedIn, setLoggedIn, userInfo }) {
  var navigate = useNavigate();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <BlackBar>
      <Content>
        <Title>
          <NavLink to="/">Exam2022</NavLink>
        </Title>
        <Menu>
          {loggedIn && (
            <>
              <NavLink to="/trips">Trips</NavLink>
              <Line />
            </>
          )}

          {!loggedIn ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          ) : (
            <>
              <NavLink
                style={() => ({
                  color: "white",
                })}
                to=""
                onClick={logout}
              >
                Logout
              </NavLink>
              {userInfo.roles === "user" && (
                <NavLink to="/userprofile">{userInfo.username}</NavLink>
              )}
              {userInfo.roles === "admin" && (
                <NavLink to="/adminpanel">Admin</NavLink>
              )}
            </>
          )}
        </Menu>
      </Content>
    </BlackBar>
  );
}

export default Header;
