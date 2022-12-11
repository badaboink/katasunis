import React from "react";
import "../../App.css";
import "./Table.scss"
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <React.Fragment>
      <center>
        <h1>VISI NAUDOTOJAI:</h1>
      </center>
      <center>
  
      <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Vardas pavardė</div>
      <div class="col col-2">Lytis</div>
      <div class="col col-3">Gimimo data</div>
      <div class="col col-4">el-paštas</div>
      <div class="col col-5">telefono numeris</div>
      <div class="col col-6"></div>
      <div class="col col-7"></div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Vardas pavardė">Vardenė Pavardenė</div>
      <div class="col col-2" data-label="Lytis">M</div>
      <div class="col col-3" data-label="Gimimo data">2022-12-11</div>
      <div class="col col-4" data-label="el-paštas">email@gmail.com</div>
      <div class="col col-5" data-label="telefono numeris">+37063666666</div>
      <div class="col col-6" data-label="edit"><Link to="/redaguoti-naudotoja">Redaguoti</Link></div>
      <div class="col col-7" data-label="delete"><Link to="/salinti-naudotoja">Šalinti</Link></div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="Vardas pavardė">Vardenė Pavardenė</div>
      <div class="col col-2" data-label="Lytis">M</div>
      <div class="col col-3" data-label="Gimimo data">2022-12-11</div>
      <div class="col col-4" data-label="el-paštas">email@gmail.com</div>
      <div class="col col-5" data-label="telefono numeris">+37063666666</div>
      <div class="col col-6" data-label="edit"><Link to="/redaguoti-naudotoja">Redaguoti</Link></div>
      <div class="col col-7" data-label="delete"><Link to="/salinti-naudotoja">Šalinti</Link></div>
    </li>
    
  </ul>
</div>
      </center>
      <center>
        <div>
          <Link to="/kurti-naudotoja">Kurti naudotoją</Link>
        </div>
      </center>
    </React.Fragment>
  );
}
