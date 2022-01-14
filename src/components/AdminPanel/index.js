/* eslint-disable no-unused-vars */
import React from "react";
//Styles
import FlexRow from "../../styles/FlexRow.styles";
import Button from "../../styles/Button.styles";
import { useNavigate } from "react-router-dom";
import AdminTrips from "./AdminTrips";
import Container from "../../styles/Container.styles";

// Styles

const AdminPanel = ({ userInfo }) => {
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
