import React from "react";
import "../../App.css";
import "./SignUp.css";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function SignUp() {
  return (
    <React.Fragment>
      <form className="login-form">
        <h2>Prisijungti</h2>
        <br></br>
        <div className="login-control">
          <label className="login-label" htmlFor="email">
            El. paštas
          </label>
          <input className="login-input" type="email" required id="email" />
        </div>
        <div className="login-control">
          <label className="login-label" htmlFor="password">
            Slaptažodis
          </label>
          <input className="login-input" type="password" required id="password" />
        </div>
        <div className="login-actions">
          <button className="login-button">Prisijungti</button>
        </div>
      </form>
      <br></br>
      <center>
        <h3>Neturi paskyros?</h3>
        <div>   
          <Link to="/registracija">
            Registruotis
          </Link>  
        </div>
      </center>
    </React.Fragment>
  );
}
