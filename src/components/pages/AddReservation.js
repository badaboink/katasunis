import React from "react";
import { useState } from "react";
import "../../App.css";
import "./Register.css";
import { useEffect } from "react";

export default function AddReservation() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [clientInput, setClientInput] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getServices();
    getClients();
  }, []);

  const getClients = () => {
    fetch("http://localhost/katasunis/katasunis_backend/selectKlientai.php")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setClients(data);
      });
  };

  const getServices = () => {
    fetch("http://localhost/katasunis/katasunis_backend/selectPaslaugos.php")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setServices(data);
      });
  };

  const Click = (event) => {
    let state = {
      date: dateInput,
      time: timeInput,
      client: clientInput,
      services: selectedServices,
    };
    //console.log(state);
    //console.log(JSON.stringify(state));

    fetch("http://localhost/katasunis/katasunis_backend/rezervacija.php", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    }).then((response) => {
      console.log(response);
    });
    event.preventDefault();

    console.log(selectedServices);
  };

  const handleCheckboxChange = (event) => {
    const selectedService = event.target.id;
    if (selectedServices.includes(selectedService)) {
      setSelectedServices(
        selectedServices.filter((id) => id !== selectedService)
      );
    } else {
      setSelectedServices([...selectedServices, selectedService]);
    }
  };

  return (
    <form className="form" onSubmit={Click}>
      <h2>Rezervacijos kūrimas</h2>
      <br></br>
      <div className="control">
        <label className="label" htmlFor="clients">
          Klientas
        </label>
        <select
          id="dropdown"
          className="input"
          value={clientInput}
          onChange={(e) => setClientInput(e.target.value)}
        >
          <option value="-">-</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.vardas + " " + client.pavarde}
            </option>
          ))}
        </select>
      </div>
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
        {services.map((service) => (
          <div key={service.id}>
            <input
              type="checkbox"
              id={service.id}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={service.id}>{service.pavadinimas}</label>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="button">Kurti rezervaciją</button>
      </div>
    </form>
  );
}
