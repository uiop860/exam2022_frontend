import React, { useState, useEffect } from "react";
//Router
import { Link } from "react-router-dom";
//Facade
import { facade } from "../../apiFacade";
import Button from "../../styles/Button.styles";
//Styles
import Container from "../../styles/Container.styles";
import Dropdown from "../../styles/Dropdown.styles";
import FlexRow from "../../styles/FlexRow.styles";

const Trips = () => {
  const [trips, setTrips] = useState();
  const [guides, setGuides] = useState();
  const [updated, setUpdated] = useState();

  useEffect(() => {
    facade
      .fetchAny("/trip/all", "GET", true)
      .then((data) => {
        setTrips(data);
      })
      .catch(() => {});

    facade
      .fetchAny("/guide/all", "GET", true)
      .then((data) => {
        setGuides(data);
      })
      .catch(() => {});
  }, [updated]);

  const onSelect = (e) => {
    e.preventDefault();
    const guideId = e.target.value;
    const tripId = e.target.id;
    facade
      .fetchAny("/trip/addguide", "POST", true, {
        guideId: guideId,
        tripId: tripId,
      })
      .then(() => {
        setUpdated(!updated);
      })
      .catch(() => {});
  };

  const onClickTrip = (e) => {
    e.preventDefault();
    const tripId = e.target.id;
    facade
      .fetchAny(`/trip/remove/${tripId}`, "POST", true)
      .then(() => {
        setUpdated(!updated);
      })
      .catch(() => {});
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
            <FlexRow flexWrap="no-wrap" marginBottom="0">
              <Dropdown id={x.id} onChange={onSelect}>
                <option hidden>Select guide</option>
                {guides &&
                  guides.map((y) => (
                    <>
                      <option
                        selected={x.guide && x.guide.name === y.name}
                        key={y.id}
                        value={y.id}
                      >
                        {y.name}
                      </option>
                    </>
                  ))}
              </Dropdown>
              <Button onClick={onClickTrip} id={x.id}>
                Remove trip
              </Button>
            </FlexRow>
          </Container>
        ))}
    </FlexRow>
  );
};

export default Trips;
