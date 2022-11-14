import React from "react";
import "../../App.css";
import "./Table.scss";
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
      <div class="col col-1" data-label="Užsakymo nr.">54126</div>
      <div class="col col-2" data-label="Klientas">Kornelija Magylaitė</div>
      <div class="col col-3" data-label="Adresas">Chemikų g. 18-4, Kėdainiai</div>
      <div class="col col-4" data-label="Prekės">Pampersai</div>
      <div class="col col-5" data-label="Suma">20€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Užsakymo nr.">84596</div>
      <div class="col col-2" data-label="Klientas">Agnė Rauluševičiūtė</div>
      <div class="col col-3" data-label="Adresas">Pašilės g. 39, Kaunas</div>
      <div class="col col-4" data-label="Prekės">Kačių ėdalas "Whiskas"</div>
      <div class="col col-5" data-label="Suma">7€</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Užsakymo nr.">15489</div>
      <div class="col col-2" data-label="Klientas">Mantas Jurgelaitis</div>
      <div class="col col-3" data-label="Adresas">KTU, XI r., 308b kab.</div>
      <div class="col col-4" data-label="Prekės">Akvariumas</div>
      <div class="col col-5" data-label="Suma">200€</div>
    </li>
    
  </ul>
</div>
    </React.Fragment>
  );
}
