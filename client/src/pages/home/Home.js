import React from "react";
import Header from "../../components/header/Header";
import "../../App.css";
const Home = () => {
  return (
    <div>
      <Header text="Welcome to MN Bus find out where to go to ride in the bus." />
      <div className="forms-container">
        <h1>1. Select a Route to Travel</h1>
        <form className="forms">
          <select className="form-control">
            <option value="0">Choose a route</option>
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
