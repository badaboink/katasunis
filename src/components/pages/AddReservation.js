import React from "react";
import "../../App.css";
import "./Register.css";

export default function AddReservation() {
  return (
    <form className="form">
      <h2>Rezervacijos kūrimas</h2>
      <br></br>
      <div className="control">
        <label className="label" htmlFor="date">
          Data
        </label>
        <input className="input" type="data" required id="date" />
      </div>
      <div className="control">
        <label className="label" htmlFor="date">
          Laikas
        </label>
        <input className="input" type="time" required id="time" />
      </div>
      <div className="control">
        <label className="label" htmlFor="gender">
          Paslaugos
        </label>
        <input type="checkbox" id="paslauga1"/>
        <label for="paslauga1">Apžiūra</label><br></br>
        <input type="checkbox" id="paslauga2"/>
        <label for="paslauga2">Nagų kirpimas</label><br></br>
        <input type="checkbox" id="paslauga3"/>
        <label for="paslauga3">Skiepijimas</label><br></br>
      </div>
      <div className="actions">
        <button className="button">Kurti rezervaciją</button>
      </div>
    </form>
  );
}
