import React, { useState, useEffect } from "react";
//Router
import { Link } from "react-router-dom";
//Facade
import { facade } from "../../apiFacade";
//Styles
import Button from "../../styles/Button.styles";
import Container from "../../styles/Container.styles";
import FlexRow from "../../styles/FlexRow.styles";

const Trips = ({ userInfo }) => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    facade.fetchAny("/trip/all", "GET", true).then((data) => {
      setTrips(data);
    });
  }, []);

  const onClick = () => {
    facade
      .fetchAny(`/trip/addUser/${userInfo.username}`, "POST", true)
      .then(() => {});
  };

  return (
    <FlexRow>
      {trips &&
        trips.map((x) => (
          <Container alignItems="flex-start" key={x.id}>
            <h3>{x.name}</h3>
            <h3>{x.location}</h3>
            <h3>{x.duration}</h3>
            <h3>{x.packingList}</h3>
            <h3>{x.date}</h3>
            {x.guide && (
              <Link to={`/guide/${x.guide.id}`}>
                <h3>{x.guide.name}</h3>
              </Link>
            )}
            <Button onClick={onClick}>Assign</Button>
          </Container>
        ))}
    </FlexRow>
  );
};

export default Trips;
