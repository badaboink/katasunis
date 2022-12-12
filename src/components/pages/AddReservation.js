import React from "react";
import { useState } from "react";
import "../../App.css";
import "./Register.css";
import { useEffect } from "react";

export default function AddReservation() {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, [services]);

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
          <div>
            <input
              type="checkbox"
              id={service.id}
              onChange={handleCheckboxChange}
            />
            {service.pavadinimas}
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="button">Kurti rezervaciją</button>
      </div>
    </form>
  );
}
