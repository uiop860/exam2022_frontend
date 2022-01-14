import React, { useState, useEffect } from "react";
//Router
import { Link } from "react-router-dom";
//Facade
import { facade } from "../../apiFacade";
//Styles
import Button from "../../styles/Button.styles";
import Container from "../../styles/Container.styles";
import ErrorText from "../../styles/Error.styles";
import FlexRow from "../../styles/FlexRow.styles";

const Trips = ({ userInfo }) => {
  const [trips, setTrips] = useState();
  const [updated, setUpdated] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    facade.fetchAny("/trip/all", "GET", true).then((data) => {
      setTrips(data);
    });
  }, [updated]);

  const onClickAssign = (e) => {
    e.preventDefault();
    const tripId = e.target.parentNode.id;
    facade
      .fetchAny("/trip/adduser", "POST", true, {
        username: userInfo.username,
        tripid: tripId,
      })
      .then(() => {
        setUpdated(!updated);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };

  const onClickRemove = (e) => {
    e.preventDefault();
    const tripId = e.target.parentNode.id;
    facade
      .fetchAny("/trip/removeuser", "POST", true, {
        username: userInfo.username,
        tripid: tripId,
      })
      .then(() => {
        setUpdated(!updated);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  };

  return (
    <FlexRow>
      {trips &&
        trips.map((x) => (
          <Container alignItems="flex-start" key={x.id} id={x.id}>
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
            {error && <ErrorText>{error}</ErrorText>}
            {x.users &&
            x.users.some((y) => y.userName === userInfo.username) ? (
              <Button onClick={onClickRemove}>Remove trip</Button>
            ) : (
              <Button onClick={onClickAssign}>Assign</Button>
            )}
          </Container>
        ))}
    </FlexRow>
  );
};

export default Trips;
