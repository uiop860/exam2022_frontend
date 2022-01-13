import React, { useState } from "react";

// Facade
import { facade } from "../../apiFacade";

// Styles
import Input from "../../styles/Input.styles";
import Button from "../../styles/Button.styles";
import ErrorText from "../../styles/Error.styles";
import Container from "../../styles/Container.styles";

// Router
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    facade
      .signup(credentials.username, credentials.password)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        setError("Something went wrong");
        setCredentials({ username: "", password: "" });
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
      <Button onClick={onSubmit}>Signup</Button>
    </Container>
  );
};

export default Login;
