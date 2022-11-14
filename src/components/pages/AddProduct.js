import React from "react";
import "../../App.css";
import "./Register.css";
import "../Navbar.css";

export default function AddProduct() {
  return (
    <React.Fragment>
      <form className="form">
        <h2>Prekės kūrimas</h2>
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
          <label className="label" htmlFor="price">
            Kaina
          </label>
          <input className="input" type="number" required id="price" />
        </div>
        <div className="control">
          <label className="label" htmlFor="type">
            Prekės tipas
          </label>
          <select className="input" id="type">
            <option value="-">-</option>
            <option value="maistas">Maistas</option>
            <option value="drabuziai">Drabužiai</option>
            <option value="vaistai">Vaistai</option>
            <option value="vaistai">Pavadėliai</option>
            <option value="vaistai">Kita</option>
          </select>
        </div>
        <div className="control">
          <label className="label" htmlFor="size">
            Dydis
          </label>
          <select className="input" id="size">
            <option value="-">-</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="actions">
          <button className="button">Kurti prekę</button>
        </div>
      </form>
      <br></br>
    </React.Fragment>
  );
}
