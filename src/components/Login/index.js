import React, { useState } from "react";
//router
import { useNavigate } from "react-router-dom";
//facade
import { facade } from "../../apiFacade";
//styles
import Input from "../../styles/Input.styles";
import Button from "../../styles/Button.styles";
import ErrorText from "../../styles/Error.styles";
import Container from "../../styles/Container.styles";

const Login = ({ setLoggedIn, setUserinfo }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const credentialsInitial = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(credentialsInitial);

  const onSubmit = (e) => {
    e.preventDefault();
    facade
      .login(credentials.username, credentials.password)
      .then(() => {
        setLoggedIn(true);
        setUserinfo({
          username: credentials.username,
          roles: facade.getRoles(),
        });
        navigate("/");
      })
      .catch(() => {
        setError("Something went wrong");
        setCredentials(credentialsInitial);
      });
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <Input
        placeholder="User Name"
        id="username"
        onChange={onChange}
        value={credentials.username}
      />
      <Input
        placeholder="Password"
        type="password"
        id="password"
        value={credentials.password}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button onClick={onSubmit}>Login</Button>
    </Container>
  );
};

export default Login;
