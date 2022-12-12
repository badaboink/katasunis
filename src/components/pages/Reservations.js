//components/ProductList.js

import React, { Fragment } from "react";
import "./Table.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations();

  }, []);

  const getReservations = () => {
    fetch("http://localhost/katasunis/katasunis_backend/selectRezervacijos.php")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setReservations(data);
      });
  };

  

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
                <div class="col col-3">Laikas</div>
                <div class="col col-4">Būsena</div>
              </li>
              {reservations.map((reservation, index) => (
                  <li class="table-row" key={index}>
                    <div class="col col-1" data-label="Klientas">
                    {reservation.vardas + " " + reservation.pavarde}
                    </div>
                    <div class="col col-2" data-label="Data">
                     {reservation.data}
                    </div>
                    <div class="col col-3" data-label="Laikas">
                     {reservation.laikas}
                    </div>
                    <div class="col col-4" data-label="Būsena">
                      
                    </div>
                  </li>
                      ))}
            </ul>
          </div>
          <Link to="/kurti-rezervacija">Kurti rezervaciją</Link>
        </div>
      </center>
    </Fragment>
  );
}
