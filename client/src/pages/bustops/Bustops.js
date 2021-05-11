import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "../../App.css";

const Bustops = () => {
  let { route } = useParams();
  let { direction } = useParams();
  const [stopsList, setStopsList] = useState([]);
  let headingText = `Catch the next ride on the following stops:`;

  useEffect(() => {
    fetch(`http://localhost:3001/Stops/${route}/${direction}?format=json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStopsList(data);
      });
  }, []);

  return (
    <div>
      <Header text={headingText} />
      <div className="forms-container">
        <table>
          <tbody>
            {stopsList.map((stopItem) => (
              <tr key={stopItem.Value}>
                <td>
                  <h1>{stopItem.Text}</h1>
                </td>
                <td>
                  <a href="#" className="links">
                    Open Location in Map
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bustops;
