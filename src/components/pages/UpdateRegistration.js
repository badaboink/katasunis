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
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});

  useEffect(() => {
    getServices();
    getReservation(id);
  }, [services, id]);

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
        console.log(data);
        setReservation(data);
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

  /*const handleCheckboxChange = (event, serviceId) => {
    const selectedService = event.target.id;
    if (selectedServices.includes(selectedService)) {
      setSelectedServices(
        selectedServices.filter((id) => id !== selectedService)
      );
    } else {
      setSelectedServices([...selectedServices, selectedService]);
    }
    const { id, checked } = event.target;
    setCheckboxStates({ ...checkboxStates, [id]: checked });
  };*/

  /*const handleCheckboxChange = (serviceId) => {
    // Convert the string of IDs into an array of strings
    const idArray = reservation.paslaugosId
      ? reservation.paslaugosId.split(" ")
      : [];
  
    // Check if the serviceId exists in the array
    const isChecked = idArray.includes(serviceId);
  
    // If the checkbox is checked, remove the serviceId from the array
    if (isChecked) {
      const index = idArray.indexOf(serviceId);
      if (index > -1) {
        idArray.splice(index, 1);
      }
    } else {
      // If the checkbox is not checked, add the serviceId to the array
      idArray.push(serviceId);
    }
  
    // Set the new value of reservation.paslaugosId with the updated array
    reservation.paslaugosId = idArray.join(" ");
  };*/

  /*function handleCheckboxChange(serviceId) {
    // Convert the string of IDs into an array of strings
    const idArray = reservation.paslaugosId
      ? reservation.paslaugosId.split(" ")
      : [];
  
    // Check if the service ID exists in the array
    const index = idArray.indexOf(serviceId);
    if (index === -1) {
      // If the service ID doesn't exist, add it to the array
      idArray.push(serviceId);
    } else {
      // If the service ID does exist, remove it from the array
      idArray.splice(index, 1);
    }
  
    // Update the reservation.paslaugosId property with the updated array
    reservation.paslaugosId = idArray.join(" ");
  }*/

  function handleCheckboxChange(serviceId, isChecked) {
    // Convert the string of IDs into an array of strings
    const idArray = reservation.paslaugosId
      ? reservation.paslaugosId.split(" ")
      : [];

    // Check if the serviceId exists in the array
    const idExists = idArray.includes(serviceId);

    // If the checkbox is being checked, add the serviceId to the array
    if (isChecked && !idExists) {
      idArray.push(serviceId);
    }

    // If the checkbox is being unchecked, remove the serviceId from the array
    if (!isChecked && idExists) {
      const index = idArray.indexOf(serviceId);
      idArray.splice(index, 1);
    }

    // Convert the array of strings back into a string
    const newIdString = idArray.join(" ");

    // Update the reservation.paslaugosId property with the new string of IDs
    setReservation((prev) => ({
      ...prev,
      paslaugosId: newIdString,
    }));
  }

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
            <div>
              <input
                type="checkbox"
                id={service.id}
                checked={isChecked}
                disabled={false}
                onChange={(event) => {
                  // Determine the current state of the checkbox
                  const isChecked = event.target.checked;

                  handleCheckboxChange(service.id, isChecked);
                }}
              />
              {service.pavadinimas}
            </div>
          );
        })}
      </div>
      <div className="actions">
        <button className="button">Kurti rezervaciją</button>
      </div>
    </form>
  );
}
