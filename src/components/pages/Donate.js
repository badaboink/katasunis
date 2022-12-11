import React from "react";
import "../../App.css";
import "./Donate.css";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function SignUp() {
  return (
    <React.Fragment>
      <form className="donate-form">
        <h2>Skatiname paaukoti prieglaudai</h2>
        <br></br>
        <div className="donate-control">
          <label className="donate-label" htmlFor="donate-sum">
            Aukojamoji suma
          </label>
          <input className="donate-input" type="donate"/>
        </div>
        <div className="donate-actions">
          <button className="donate-button">Toliau</button>
        </div>
      </form>
      <br></br>
    </React.Fragment>
  );
}
