import React, { useState } from "react";
//router
import { useNavigate } from "react-router-dom";
//facade
import { facade } from "../../apiFacade";
//styles
import Button from "../../styles/Button.styles";
import Container from "../../styles/Container.styles";
import Input from "../../styles/Input.styles";
import ErrorText from "../../styles/Error.styles";

const CreateGuide = () => {
  const initialSate = {
    name: "",
    gender: "",
    birthyear: "",
    profile: "",
    imageurl: "",
  };
  const [trip, setTrip] = useState(initialSate);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    facade
      .fetchAny("/guide/create", "POST", true, {
        name: trip.name,
        gender: trip.gender,
        birthYear: trip.birthyear,
        profile: trip.profile,
        imageUrl: trip.imageurl,
      })
      .then(() => {
        navigate("/adminpanel");
      })
      .catch(() => {
        setError("Something went wrong");
        setTrip(initialSate);
      });
  };

  const onChange = (e) => {
    setTrip({
      ...trip,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <Container>
      <Input
        placeholder="Name"
        id="name"
        value={trip.name}
        onChange={onChange}
      />
      <Input
        placeholder="Gender"
        id="gender"
        value={trip.gender}
        onChange={onChange}
      />
      <Input
        placeholder="Birth Year"
        id="birthyear"
        value={trip.birthyear}
        onChange={onChange}
      />
      <Input
        placeholder="Profile"
        id="profile"
        value={trip.profile}
        onChange={onChange}
      />
      <Input
        placeholder="Image URL"
        id="imageurl"
        value={trip.imageurl}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button onClick={onClick}>Create guide</Button>
    </Container>
  );
};

export default CreateGuide;
