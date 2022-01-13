import { myUrl } from "./settings";

const URL = myUrl;
function handleHtttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });

    return fetch(URL + "/user", options)
      .then(handleHtttpErrors)
      .then((res) => {
        setToken(res.token);
        sessionStorage.setItem("username", user);
      });
  };

  const signup = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/user/create", options)
      .then(handleHtttpErrors)
      .then(() => {});
  };

  const fetchAny = (someUrl, method, auth, body) => {
    const options = makeOptions(method, auth, body);
    return fetch(URL + someUrl, options).then(handleHtttpErrors);
  };

  const setToken = (token) => {
    sessionStorage.setItem("jwtToken", token);

    const jwtData = token.split(".")[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const roles = decodedJwtData.roles;
    sessionStorage.setItem("roles", roles);
  };

  const getRoles = () => {
    let token = sessionStorage.getItem("jwtToken");

    const jwtData = token.split(".")[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);

    const roles = decodedJwtData.roles;
    return roles;
  };

  const getToken = () => {
    return sessionStorage.getItem("jwtToken");
  };

  const loggedIn = () => {
    const loggedIn = getToken() !== null;
    return loggedIn;
  };

  const logout = () => {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("genre");
  };

  const makeOptions = (method, addToken, body) => {
    let opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    handleHtttpErrors,
    fetchAny,
    getRoles,
    signup,
  };
}
export const facade = apiFacade();
