import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "../../App.css";

const Directions = () => {
  const [directions, setDirections] = useState([]);
  const [usrDirection, setUsrDirection] = useState("");
  let { route } = useParams();
  let headingText = `You selected the route: #${route}`;

  useEffect(() => {
    fetch(`http://localhost:3001/Directions/${route}?format=json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDirections(data);
      });
  }, []);

  useEffect(() => {
    console.log(usrDirection);
  }, [usrDirection]);

  const submitHandler = (event) => {
    event.preventDefault();
    //history.push(`/bustops/${route}/${usrDirection}`);
  };

  return (
    <div>
      <Header text={headingText} />
      <div className="forms-container">
        <h1>2. Select The Direction Where You Are Traveling.</h1>
        <form className="forms" onSubmit={submitHandler}>
          <select
            className="form-control"
            onChange={(event) => {
              event.preventDefault();
              setUsrDirection(event.target[event.target.selectedIndex].value);
            }}
          >
            <option key={-1} value={-1}>
              Choose a direction
            </option>
            {directions.map((direction) => (
              <option key={direction.Value} value={direction.Text}>
                {direction.Text}
              </option>
            ))}
          </select>
          <button className="form-control" type="submit">
            NEXT >
          </button>
        </form>
      </div>
    </div>
  );
};

export default Directions;
