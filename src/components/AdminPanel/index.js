import React from "react";
//router
import { useNavigate } from "react-router-dom";
//styles
import Container from "../../styles/Container.styles";
import FlexRow from "../../styles/FlexRow.styles";
import Button from "../../styles/Button.styles";
//components
import AdminTrips from "./AdminTrips";

const AdminPanel = () => {
  const navigate = useNavigate();

  const onClickGuide = (e) => {
    e.preventDefault();
    navigate("/createguide");
  };

  const onClickTrip = (e) => {
    e.preventDefault();
    navigate("/createtrip");
  };

  return (
    <>
      <FlexRow>
        <Container>
          <Button onClick={onClickGuide} width="200">
            Create new guide
          </Button>
          <Button onClick={onClickTrip} width="200">
            Create new trip
          </Button>
        </Container>
      </FlexRow>
      <AdminTrips />
    </>
  );
};

export default AdminPanel;
