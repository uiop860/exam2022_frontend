import React, { useState } from "react";
import { facade } from "../../apiFacade";
import Button from "../../styles/Button.styles";
import Container from "../../styles/Container.styles";
import ErrorText from "../../styles/Error.styles";
import Input from "../../styles/Input.styles";

const UserProfile = ({ userInfo }) => {
  const credentialsInitial = {
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  };
  const [credentials, setCredentials] = useState(credentialsInitial);
  const [error, setError] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (credentials.newPassword === credentials.repeatNewPassword) {
      facade
        .fetchAny("/user/update/" + userInfo.username, "POST", true, {
          password: credentials.newPassword,
          oldPassword: credentials.oldPassword,
        })
        .then(() => {
          setError("Password updated");
          setCredentials(credentialsInitial);
        })
        .catch(() => {
          setError("Something went wrong");
          setCredentials(credentialsInitial);
        });
    } else {
      setError("Passwords must match");
      setCredentials(credentialsInitial);
    }
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
        placeholder="Old password"
        type="password"
        id="oldPassword"
        value={credentials.oldPassword}
        onChange={onChange}
      />
      <Input
        placeholder="New password"
        type="password"
        id="newPassword"
        value={credentials.newPassword}
        onChange={onChange}
      />
      <Input
        placeholder="Repeat new password"
        type="password"
        id="repeatNewPassword"
        value={credentials.repeatNewPassword}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button width="200" onClick={onSubmit}>
        Change password
      </Button>
    </Container>
  );
};

export default UserProfile;
