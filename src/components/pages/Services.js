import React from "react";
import "../../App.css";
import "./Table.scss"
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <React.Fragment>
      <center>
        <h1>VISOS PASLAUGOS:</h1>
      </center>
      <center>
  
      <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Paslauga</div>
      <div class="col col-2">Aprašymas</div>
      <div class="col col-3">Trukmė</div>
      <div class="col col-4">Kaina</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">Apžiūra</div>
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
      </center>
      <center>
        <div>
          <Link to="/kurti-paslauga">Kurti paslaugą</Link>
        </div>
      </center>
    </React.Fragment>
  );
}
