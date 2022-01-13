//libraries
import { useState, useEffect } from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/index";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";

// Styles
import { BodyFlex, FlexBox, GlobalStyle } from "./GlobalStyle";

// Facade
import { facade } from "./apiFacade";
import AdminPanel from "./components/AdminPanel";
import UserProfile from "./components/UserProfile";
import Trips from "./components/Trips";
import Guide from "./components/Guide";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserinfo] = useState({ username: "", roles: "" });

  useEffect(() => {
    if (!loggedIn) {
      setUserinfo({ username: "", roles: "" });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (facade.loggedIn()) {
      setLoggedIn(true);
      setUserinfo({
        username: sessionStorage.getItem("username"),
        roles: facade.getRoles(),
      });
    }
  }, []);

  return (
    <Router>
      <BodyFlex>
        <Header
          loggedIn={loggedIn}
          userInfo={userInfo}
          setUserinfo={setUserinfo}
          setLoggedIn={setLoggedIn}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FlexBox>
                <Home />
              </FlexBox>
            }
          />
          <Route
            path="/login"
            element={
              <FlexBox>
                <Login
                  setLoggedIn={setLoggedIn}
                  userInfo={userInfo}
                  setUserinfo={setUserinfo}
                />
              </FlexBox>
            }
          />
          <Route
            path="/signup"
            element={
              <FlexBox>
                <Signup setLoggedIn={setLoggedIn} />
              </FlexBox>
            }
          />
          <Route
            path="/adminpanel"
            element={
              <FlexBox>
                <AdminPanel />
              </FlexBox>
            }
          />
          <Route
            path="/userprofile"
            element={
              <FlexBox>
                <UserProfile userInfo={userInfo} />
              </FlexBox>
            }
          />
          <Route
            path="/trips"
            element={
              <FlexBox>
                <Trips userInfo={userInfo} />
              </FlexBox>
            }
          />
          <Route
            path="/guide/:id"
            element={
              <FlexBox>
                <Guide />
              </FlexBox>
            }
          />
          <Route
            path="*"
            element={
              <FlexBox>
                <NoMatch />
              </FlexBox>
            }
          />
        </Routes>
      </BodyFlex>
      <GlobalStyle />
    </Router>
  );
}

export default App;
