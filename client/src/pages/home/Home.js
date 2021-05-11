import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import "../../App.css";
const Home = () => {
  const [routes, setRoutes] = useState([]);
  const [usrRoute, setUsrRoute] = useState(0);
  let history = useHistory();

  useEffect(() => {
    console.log(usrRoute);
  }, [usrRoute]);

  useEffect(() => {
    fetch("https://svc.metrotransit.org/nextrip/Routes?format=json")
      .then((response) => response.json())
      .then((data) => setRoutes(data));
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    history.push(`/directions/${usrRoute}`);
  };

  return (
    <div>
      <Header text="Welcome to MN Bus! Find out where to get a ride." />
      <div className="forms-container">
        <h1>1. Select a Route to Travel</h1>
        <form className="forms" onSubmit={submitHandler}>
          <select
            className="form-control"
            onChange={(event) => {
              event.preventDefault();
              setUsrRoute(event.target[event.target.selectedIndex].value);
            }}
          >
            <option key="0" value="0">
              Choose a route
            </option>
            {routes.map((route) => (
              <option key={route.Route} value={route.Route}>
                {route.Description}
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

export default Home;
