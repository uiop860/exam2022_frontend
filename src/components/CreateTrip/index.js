import React from "react";
import Button from "../../styles/Button.styles";
import Container from "../../styles/Container.styles";
import Input from "../../styles/Input.styles";
import { facade } from "../../apiFacade";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorText from "../../styles/Error.styles";

const CreateTrip = () => {
  const initialSate = {
    name: "",
    location: "",
    duration: "",
    packingList: "",
    date: "",
  };
  const [trip, setTrip] = useState(initialSate);
  const [error, setError] = useState();

  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    facade
      .fetchAny("/trip/create", "POST", true, {
        name: trip.name,
        location: trip.location,
        duration: trip.duration,
        date: trip.date,
        packingList: trip.packingList,
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
        placeholder="Location"
        id="location"
        value={trip.location}
        onChange={onChange}
      />
      <Input
        placeholder="Duration"
        id="duration"
        value={trip.duration}
        onChange={onChange}
      />
      <Input
        placeholder="Packing list"
        id="packingList"
        value={trip.packingList}
        onChange={onChange}
      />
      <Input
        type="date"
        placeholder="Date"
        id="date"
        value={trip.date}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button onClick={onClick}>Create trip</Button>
    </Container>
  );
};

export default CreateTrip;
