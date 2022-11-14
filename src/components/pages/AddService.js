import React from "react";
import "../../App.css";
import "./Register.css";
import "../Navbar.css";

export default function AddService() {
  return (
    <React.Fragment>
      <form className="form">
        <h2>Kurti paslaugą</h2>
        <br></br>
        <div className="control">
          <label className="label" htmlFor="name">
            Pavadinimas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="description">
            Aprašymas
          </label>
          <input className="input" type="textarea" required id="description" />
        </div>
        <div className="control">
          <label className="label" htmlFor="duration">
            Trukmė
          </label>
          <input className="input" type="text" required id="duration" />
        </div>
        <div className="control">
          <label className="label" htmlFor="price">
            Kaina
          </label>
          <input className="input" type="number" required id="price" />
        </div>
        <div className="actions">
          <button className="button">Paslaugos kūrimas</button>
        </div>
      </form>
      <br></br>
    </React.Fragment>
  );
}
