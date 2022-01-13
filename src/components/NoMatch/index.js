/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  });
  
  return (
    <>
    </>
  );
};

export default NoMatch;
