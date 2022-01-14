import React, { useEffect } from "react";
//router
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default NoMatch;
