import React from "react";
import "../../App.css";
import "./SignUp.css";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function SignUp() {
  return (
    <React.Fragment>
      <form className="form">
        <h2>Prisijungti</h2>
        <br></br>
        <div className="control">
          <label className="label" htmlFor="email">
            El. paštas
          </label>
          <input className="input" type="email" required id="email" />
        </div>
        <div className="control">
          <label className="label" htmlFor="password">
            Slaptažodis
          </label>
          <input className="input" type="password" required id="password" />
        </div>
        <div className="actions">
          <button className="button">Prisijungti</button>
        </div>
      </form>
      <br></br>
      <center>
        <h3>Neturi paskyros?</h3>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Link to="/registracija" className="register-link">
            Registruotis
          </Link>  
        </div>
      </center>
    </React.Fragment>
  );
}
