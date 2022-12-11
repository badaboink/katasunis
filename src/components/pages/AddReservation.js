import React from "react";
import { useState } from "react";
import "../../App.css";
import "./Register.css";
import { useEffect } from "react";

export default function AddReservation() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [serviceInput, setServiceInput] = useState("");
  const [services, setservices] = useState([]);


  useEffect(() => {
    getServices();
    console.log(services[0].pavadinimas)
  }, []);

  const getServices = () => {

      fetch('http://localhost/katasunis/katasunis_backend/selectRezervacijos.php')
          .then((response) => response.json())
          .then((data) => setservices(data));
    };

  const Click = (event) => {
    let state = {
      date: dateInput,
      time: timeInput,
      service: serviceInput,
    };
    console.log(state);
    console.log(JSON.stringify(state));

    fetch("http://localhost/katasunis/katasunis_backend/rezervacija.php", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    }).then((response) => {
      console.log(response);
    });
    event.preventDefault();

    console.log(
      dateInput,
      timeInput,
      serviceInput
    );
  };

  return (
    <form className="form" onSubmit={Click}>
      <h2>Rezervacijos kūrimas</h2>
      <br></br>
      <div className="control">
        <label className="label" htmlFor="date">
          Data
        </label>
        <input
          className="input"
          type="data"
          required
          id="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        />
      </div>
      <div className="control">
        <label className="label" htmlFor="time">
          Laikas
        </label>
        <input
          className="input"
          type="time"
          required
          id="time"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
        />
      </div>
      <div className="control">
        <label className="label" htmlFor="service">
          Paslaugos
        </label>
        <input type="checkbox" id="paslauga1" />
        <label for="paslauga1">Apžiūra</label>
        <br></br>
        <input type="checkbox" id="paslauga2" />
        <label for="paslauga2">Nagų kirpimas</label>
        <br></br>
        <input type="checkbox" id="paslauga3" />
        <label for="paslauga3">Skiepijimas</label>
        <br></br>
      </div>
      <div className="actions">
        <button className="button">Kurti rezervaciją</button>
      </div>
    </form>
  );
}
