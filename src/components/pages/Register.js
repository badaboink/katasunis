import React from "react";
import "../../App.css";
import "./Register.css";

export default function Register() {
  return (
    <form className="form">
      <h2>Registracija</h2>
      <br></br>
      <div className="control">
        <label className="label" htmlFor="username">
          Slapyvardis
        </label>
        <input className="input" type="text" required id="username" />
      </div>
      <div className="control">
        <label className="label" htmlFor="name">
          Vardas
        </label>
        <input className="input" type="text" required id="name" />
      </div>
      <div className="control">
        <label className="label" htmlFor="lastname">
          Pavardė
        </label>
        <input className="input" type="text" required id="lastname" />
      </div>
      <div className="control">
        <label className="label" htmlFor="date">
          Gimimo data
        </label>
        <input className="input" type="date" required id="date" />
      </div>
      <div className="control">
        <label className="label" htmlFor="gender">
          Lytis
        </label>
        <select className="input" id="gender">
        <option value="-">Nepasirinkta</option>
          <option value="moteris">Moteris</option>
          <option value="vyras">Vyras</option>
          <option value="kita">Kita</option>
        </select>
      </div>

      <div className="control">
        <label className="label" htmlFor="email">
          El. paštas
        </label>
        <input className="input" type="email" required id="email" />
      </div>
      <div className="control">
        <label className="label" htmlFor="number">
          Telefono nr.
        </label>
        <input className="input" type="number" required id="number" />
      </div>
      <div className="control">
        <label className="label" htmlFor="password">
          Slaptažodis
        </label>
        <input className="input" type="password" required id="password" />
      </div>
      <div className="control">
        <label className="label" htmlFor="password2">
          Pakartokite slaptažodį
        </label>
        <input className="input" type="password" required id="password2" />
      </div>
      <div className="actions">
        <button className="button">Registruotis</button>
      </div>
    </form>
  );
}
