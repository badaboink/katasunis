//components/ProductList.js

import React, { Fragment } from "react";
import "./Table.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { Modal } from "../Modal";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [reservationId, setReservationId] = useState();
  const [servicesId, setServicesId] = useState();

  useEffect(() => {
    getReservations();
  }, [reservations]);

  const getReservations = () => {
    fetch("http://localhost/katasunis/katasunis_backend/selectRezervacijos.php")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setReservations(data);
      });
  };

  const DeleteReservation = () => {
    let state = {
      id: reservationId,
      paslaugosId: servicesId,
    };

    fetch(
      `http://localhost/katasunis/katasunis_backend/deleteRezervacijos.php`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        hideModalHandler();
      });

      console.log(reservationId, servicesId);
  };

  const showModalHandler = (resId, serId) => {
    setShowModal(true);
    setReservationId(resId);
    setServicesId(serId);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <Modal
        show={showModal}
        hide={hideModalHandler}
        onRemoveReservation={DeleteReservation}
      ></Modal>
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
                <div class="col col-4">Paslaugos</div>
                <div class="col col-5"></div>
                <div class="col col-6"></div>
                <div class="col col-7"></div>
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
                  <div class="col col-4" data-label="Paslaugos">
                    {reservation.paslaugos}
                  </div>
                  <div
                    class="col col-5"
                    data-label="Salinti"
                    onClick={() =>
                      showModalHandler(reservation.id, reservation.paslaugosId)
                    }
                  >
                    <button>Šalinti</button>
                  </div>
                  <div class="col col-6" data-label="Perziureti">
                    <Button size="small">
                      <Link to={"/rezervacija?id=" + reservation.id}>
                        PERŽIŪRĖTI
                      </Link>
                    </Button>
                  </div>
                  <div class="col col-7" data-label="Perziureti">
                    <Button size="small">
                      <Link to={"/redaguoti-rezervacija?id=" + reservation.id}>
                        REDAGUOTI
                      </Link>
                    </Button>
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
