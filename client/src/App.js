import React from "react";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  //Setup react router comming up ....

  //For now just rendering the Home Landing page of the app
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;
