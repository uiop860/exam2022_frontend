import React, { useEffect, useState } from "react";
//router
import { useParams } from "react-router-dom";
//facade
import { facade } from "../../apiFacade";
//styles
import Container from "../../styles/Container.styles";

const Guide = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState();

  useEffect(() => {
    facade
      .fetchAny(`/guide/${id}`, "GET", true)
      .then((data) => {
        setGuide(data);
      })
      .catch(() => {});
  }, []);

  return (
    <Container alignItems="flex-start">
      {guide && (
        <>
          <h3>{guide.name}</h3>
          <h3>{guide.gender}</h3>
          <h3>{guide.birthYear}</h3>
          <h3>{guide.imageUrl}</h3>
          <h3>{guide.profile}</h3>
        </>
      )}
    </Container>
  );
};

export default Guide;
