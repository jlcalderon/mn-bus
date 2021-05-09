import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

const Directions = () => {
  let { route } = useParams();
  let headingText = `You are in directions of route: ${route}`;
  return <Header text={headingText} />;
};

export default Directions;
