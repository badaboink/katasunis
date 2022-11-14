//components/ProductList.js

import React, { Component, Fragment } from "react";
import "./Table.scss";
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
        <center>
          <div>

            <div class="container">
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">Klientas</div>   
                  <div class="col col-2">Data</div>
                  <div class="col col-3">Būsena</div>

                </li>
                <li class="table-row">
                  <div class="col col-1" data-label="Klientas">Kornelija Magylaitė</div>
                  <div class="col col-2" data-label="Data">2022-11-15 11:00</div>
                  <div class="col col-3" data-label="Būsena">Patvirtinta</div>

                </li>
                <li class="table-row">
                  <div class="col col-1" data-label="Klientas">Eglė Janušaitytė</div>
                  <div class="col col-2" data-label="Data">2022-11-25 15:00</div>
                  <div class="col col-3" data-label="Būsena">Nepatvirtinta</div>

                </li>
                <li class="table-row">
                  <div class="col col-1" data-label="Klientas">Agnė Rauluševičiūtė</div>
                  <div class="col col-2" data-label="Data">2022-12-15 11:3</div>
                  <div class="col col-3" data-label="Būsena">Patvirtinta</div>

                </li>
                <li class="table-row">
                  <div class="col col-1" data-label="Klientas">Justas Lisajus</div>
                  <div class="col col-2" data-label="Data">2022-11-16 18:00</div>
                  <div class="col col-3" data-label="Būsena">Patvirtinta</div>
                </li>
                <li class="table-row">
                  <div class="col col-1" data-label="Klientas">Vytas Paliukas</div>
                  <div class="col col-2" data-label="Data">2022-11-20 17:00</div>
                  <div class="col col-3" data-label="Būsena">Nepatvirtinta</div>
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
