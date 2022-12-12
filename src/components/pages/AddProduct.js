import React from "react";
import "../../App.css";
import "./Register.css";
import "../Navbar.css";
import { useState } from "react";
import { useEffect } from "react";

export default function AddProduct() {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  

  const Click = (event) => {
    let state = {
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      amount: amountInput,
      type: typeInput,
      size: sizeInput,
      weight: weightInput
    };
    console.log(state);
    console.log(JSON.stringify(state));

    fetch("http://localhost/katasunis/katasunis_backend/prekes.php", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    }).then((response) => {
      console.log(response);
    });
    event.preventDefault();

    console.log(titleInput, descriptionInput, priceInput, amountInput, typeInput, sizeInput, weightInput);
    console.log(
      titleInput,
      descriptionInput,
      priceInput,
      amountInput,
      typeInput,
      sizeInput
    );
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={Click}>
        <h2>Prekės kūrimas</h2>
        <br></br>
        <div className="control">
          <label className="label" htmlFor="name">
            Pavadinimas
          </label>
          <input
            className="input"
            type="text"
            required
            id="name"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="description">
            Aprašymas
          </label>
          <input
            className="input"
            type="textarea"
            required
            id="description"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="price">
            Kaina
          </label>
          <input
            className="input"
            type="number"
            required
            id="price"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="amount">
            Kiekis
          </label>
          <input
            className="input"
            type="number"
            required
            id="amount"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="type">
            Prekės tipas
          </label>
          <select
            className="input"
            id="type"
            value={typeInput}
            onChange={(e) => setTypeInput(e.target.value)}
          >
            <option value="-">-</option>
            <option value="maistas">Šunų maistas</option>
            <option value="maistas">Kačių maistas</option>
            <option value="maistas">Maistas</option>
            <option value="maistas">Maistas</option>
            <option value="maistas">Maistas</option>
            <option value="maistas">Maistas</option>
            <option value="drabuziai">Drabužiai</option>
            <option value="vaistai">Vaistai</option>
            <option value="vaistai">Pavadėliai</option>
            <option value="kita">Kita</option>
          </select>
        </div>
        <div className="control">
          <label className="label" htmlFor="size">
            Dydis
          </label>
          <select
            className="input"
            id="size"
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
          >
            <option value="-">-</option>
            <option value="1">XS</option>
            <option value="2">S</option>
            <option value="3">M</option>
            <option value="4">L</option>
            <option value="5">XL</option>
          </select>
        </div>
        <div className="control">
          <label className="label" htmlFor="weight">
            Svoris
          </label>
          <input
            className="input"
            type="number"
            required
            id="weight"
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
          />
        </div>
        <div className="actions">
          <button className="button">Kurti prekę</button>
        </div>
      </form>
      <br></br>
    </React.Fragment>
  );
}
