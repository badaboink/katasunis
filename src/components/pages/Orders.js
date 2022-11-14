import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <React.Fragment>
      <center>
        <h1>VISI UŽSAKYMAI:</h1>
      </center>

      <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Užsakymo nr.</div>
      <div class="col col-2">Klientas</div>
      <div class="col col-3">Adresas</div>
      <div class="col col-4">Prekės</div>
      <div class="col col-5">Suma</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">54126</div>
      <div class="col col-2" data-label="Aprašymas">Kornelija Magylaitė</div>
      <div class="col col-3" data-label="Trukmė">Chemikų g. 18-4, Kėdainiai</div>
      <div class="col col-4" data-label="Kaina">Pampersai</div>
      <div class="col col-5" data-label="Kaina">20€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">84596</div>
      <div class="col col-2" data-label="Aprašymas">Agnė Rauluševičiūtė</div>
      <div class="col col-3" data-label="Trukmė">Pašilės g. 39, Kaunas</div>
      <div class="col col-4" data-label="Kaina">Kačių ėdalas "Whiskas"</div>
      <div class="col col-5" data-label="Kaina">7€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Paslauga">15489</div>
      <div class="col col-2" data-label="Aprašymas">Mantas Jurgelaitis</div>
      <div class="col col-3" data-label="Trukmė">KTU, XI r., 308b kab.</div>
      <div class="col col-4" data-label="Kaina">Akvariumas</div>
      <div class="col col-5" data-label="Kaina">200€</div>
    </li>
    
  </ul>
</div>
    </React.Fragment>
  );
}
