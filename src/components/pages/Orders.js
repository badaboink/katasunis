import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <React.Fragment>
      <center>
        <h1>VISI UŽSAKYMAI:</h1>
      </center>

      <table>
        <tr>
          <th>Užsakymo nr.</th>
          <th>Klientas</th>
          <th>Adresas</th>
          <th>Prekės</th>
          <th>Suma</th>
        </tr>
        <tr>
          <td>54126</td>
          <td>Kornelija Magylaitė</td>
          <td>Chemikų g. 18-4, Kėdainiai</td>
          <td>Pampersai</td>
          <td>20€</td>
        </tr>
        <tr>
          <td>84596</td>
          <td>Agnė Rauluševičiūtė</td>
          <td>Pašilės g. 39, Kaunas</td>
          <td>Kačių ėdalas "Whiskas"</td>
          <td>7€</td>
        </tr>
        <tr>
          <td>15489</td>
          <td>Mantas Jurgelaitis</td>
          <td>KTU, XI r., 308b kab.</td>
          <td>Akvariumas</td>
          <td>200€</td>
        </tr>
      </table><br></br>
    </React.Fragment>
  );
}
