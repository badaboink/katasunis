import React from "react";
import "../../App.css";
import "./Register.css";
import "../Navbar.css";

export default function Buy() {
  return (
    <React.Fragment>
      <form className="form">
        <h2>Užsakymo informacija</h2>
        <br></br>
        <h3>Adresas</h3>
        <div className="control">
          <label className="label" htmlFor="name">
            Šalis
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Miestas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Rajonas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Gatvė
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Namo/buto nr.
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Pašto kodas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <br></br>
        <h3>Banko kortelės informacija</h3>
        <div className="control">
          <label className="label" htmlFor="name">
            Banko kortelės pavadinimas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Nr.
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Saugos kodas
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            Galiojimo data
          </label>
          <input className="input" type="text" required id="name" />
        </div>
        <div className="actions">
          <button className="button">Patvirtinti</button>
        </div>
      </form>    
    </React.Fragment>
  );
}
