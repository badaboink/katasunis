//components/ProductList.js

import React, { Component, Fragment } from "react";
import "./Reservations.css";
import { Link } from "react-router-dom";

class Reservations extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <Fragment>
        <center>
          <h1>VISOS REZERVACIJOS:</h1>
        </center>

        <table>
          <tr>
            <th>Klientas</th>
            <th>Data</th>
            <th>Būsena</th>
          </tr>
          <tr>
            <td>Kornelija Magylaitė</td>
            <td>2022-11-15 11:00</td>
            <td>Patvirtinta</td>
          </tr>
          <tr>
            <td>Eglė Janušaitytė</td>
            <td>2022-11-25 15:00</td>
            <td>Nepatvirtinta</td>
          </tr>
          <tr>
            <td>Agnė Rauluševičiūtė</td>
            <td>2022-12-15 11:30</td>
            <td>Patvirtinta</td>
          </tr>
          <tr>
            <td>Justas Lisajus</td>
            <td>2022-11-16 18:00</td>
            <td>Patvirtinta</td>
          </tr>
          <tr>
            <td>Vytas Paliukas</td>
            <td>2022-11-20 17:00</td>
            <td>Nepatvirtinta</td>
          </tr>
        </table>
        <center>
        <div>   
          
      <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Klientas</div>
      <div class="col col-2">Aprašymas</div>
      <div class="col col-3">Trukmė</div>
      <div class="col col-4">Kaina</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Klientas">Apžiūra</div>
      <div class="col col-2" data-label="Aprašymas">Trumpa gyvūnėlio apžiūra,veterinaro konsultacija</div>
      <div class="col col-3" data-label="Trukmė">15 - 30 min</div>
      <div class="col col-4" data-label="Kaina">15€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">Nagų kirpimas</div>
      <div class="col col-2" data-label="Aprašymas">Nagučių kirpimas</div>
      <div class="col col-3" data-label="Trukmė">20 - 30 min</div>
      <div class="col col-4" data-label="Kaina">15€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">Skiepijimas</div>
      <div class="col col-2" data-label="Aprašymas">Skiepas nuo pasirinktos ligos</div>
      <div class="col col-3" data-label="Trukmė">10 min</div>
      <div class="col col-4" data-label="Kaina">10€</div>
    </li>
    
  </ul>
</div>
          <Link to="/kurti-rezervacija">
            Kurti rezervaciją
          </Link> 
          </div>      
      </center>
      </Fragment>
    );
  }
}

export default Reservations;
