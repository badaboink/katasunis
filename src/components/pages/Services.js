import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <React.Fragment>
      <center>
        <h1>VISOS PASLAUGOS:</h1>
      </center>

      <table>
        <tr>
          <th>Paslauga</th>
          <th>Aprašymas</th>
          <th>Trukmė</th>
          <th>Kaina</th>
        </tr>
        <tr>
          <td>Apžiūra</td>
          <td>Trumpa gyvūnėlio apžiūra,veterinaro konsultacija</td>
          <td>15 - 30 min</td>
          <td>nuo 20€</td>
        </tr>
        <tr>
          <td>Nagų kirpimas</td>
          <td>Nagučių kirpimas</td>
          <td>20 - 30 min</td>
          <td>15€</td>
        </tr>
        <tr>
          <td>Skiepijimas</td>
          <td>Skiepas nuo pasirinktos ligos</td>
          <td>10 min</td>
          <td>10€</td>
        </tr>
      </table>
      <center>
        <div>
          <Link to="/kurti-paslauga">Kurti paslaugą</Link>
        </div>
      </center>
    </React.Fragment>
  );
}
