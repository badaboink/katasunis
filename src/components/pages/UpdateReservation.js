import React from "react";
import { useState } from "react";
import "../../App.css";
import "./Register.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateReservation() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  let id = params.get("id");

  const [reservation, setReservation] = useState([]);
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [clientInput, setClientInput] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});

  useEffect(() => {
    getServices();
    getClients();
    getReservation(id);
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

  const getReservation = (id) => {
    //perduot php id?
    fetch(
      "http://localhost/katasunis/katasunis_backend/perziuretiRezervacija.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setReservation(data);
        setDateInput(data.data);
        setTimeInput(data.laikas);
        setSelectedServices(Array.from(data.paslaugosId));
        setClientInput(data.klientasId);
      });
  };

  const Click = (event) => {

    let state = {
      id: id,
      date: dateInput,
      time: timeInput,
      client: clientInput,
      services: selectedServices,
    };
    //console.log(state);
    //console.log(JSON.stringify(state));

    fetch("http://localhost/katasunis/katasunis_backend/updateRezervacija.php", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    }).then((response) => {
      console.log(response);
    });
    event.preventDefault();
    console.log(selectedServices);
    console.log(dateInput);
    console.log(timeInput);
    console.log(clientInput);
  };

  function handleCheckboxChange(event, serviceId, isChecked) {

    const idArray = reservation.paslaugosId
      ? reservation.paslaugosId.split(" ")
      : [];

    const idExists = idArray.includes(serviceId);

    if (isChecked && !idExists) {
      idArray.push(serviceId);
    }

    if (!isChecked && idExists) {
      const index = idArray.indexOf(serviceId);
      idArray.splice(index, 1);
    }

    const newIdString = idArray.join(" ");

    let newArr = idArray.filter(x => x.trim() != ' ');

    setReservation((prev) => ({
      ...prev,
      paslaugosId: newIdString,
    }));


    setSelectedServices(newArr);

    //console.log(selectedServices);
  }

  return (
    <form className="form" onSubmit={Click}>
      <h2>Rezervacijos redagavimas</h2>
      <br></br>
      <div className="control">
        <label className="label" htmlFor="clients">
          Klientas
        </label>
        <select id="dropdown" className="input" value={clientInput} onChange={(e) => setClientInput(e.target.value)}>
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
          type="date"
          required
          id="date"
          defaultValue={reservation.data}
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
          defaultValue={reservation.laikas}
          onChange={(e) => setTimeInput(e.target.value)}
        />
      </div>
      <div className="control">
        <label className="label" htmlFor="service">
          Paslaugos
        </label>
        {services.map((service) => {
          // Generate a unique id for the checkbox input element

          // Convert the string of IDs into an array of strings
          const idArray = reservation.paslaugosId
            ? reservation.paslaugosId.split(" ")
            : [];

          // Check if the ID exists in the array
          const isChecked = idArray.includes(service.id);

          return (
            <div key={service.id}>
              <input
                type="checkbox"
                id={service.id}
                key={service.id}
                checked={isChecked}
                disabled={false}
                onChange={(event) => {
                  // Determine the current state of the checkbox
                  const isChecked = event.target.checked;

                  handleCheckboxChange(event, service.id, isChecked);
                }}
              />
              {service.pavadinimas}
            </div>
          );
        })}
      </div>
      <div className="actions">
        <button className="button">Redaguoti rezervaciją</button>
      </div>
    </form>
  );
}
