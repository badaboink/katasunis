import React from "react";
import "../../App.css";
import "./Register.css";

import { useState } from "react";
import { useEffect } from "react";

export default function EditProfile() {
    let text = window.location.href;
    let result = text.lastIndexOf("/");
    let id = text.substring(result+1, text.length);
    const [users, setUser] = useState([]);
    
    useEffect(() => {
        // Fetch the user's data from the PHP file using their ID
        fetch(`http://localhost/katasunis/katasunis_backend/gauti_naudotoja.php?id=${id}`)
          .then(response => response.json())
          .then(data => {setUser(data);
          });
          
      }, [id]); // This hook will only be called once when the component is mounted

      return (
        <form className="form">
          <h2>Profilio redagavimas</h2>
          <br></br>
          {
          users.map((user) => {
            return (
              <React.Fragment>
                <div className="control">
                  <label className="label" htmlFor="firstname">
                    Vardas
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="firstname"
                    value={user.vardas}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="lastname">
                    Pavardė
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="lastname"
                    value={user.pavarde}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="slapyvardis">
                    Slapyvardis
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="lastname"
                    value={user.slapyvardis}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="slaptazodis">
                    Slaptazodis
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="lastname"
                    value={user.slaptazodis}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="el_pastas">
                    El. paštas
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="lastname"
                    value={user.el_pastas}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="lytis">
                    El. paštas
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="lytis"
                    value={user.lytis}
                  />
                </div>
                <div className="control">
                  <label className="label" htmlFor="telefono_numeris">
                    Telefono numeris
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="telefono_numeris"
                    value={user.telefono_numeris}
                  />
                </div>

                <div className="actions">
                <button className="button">Saugoti pakeitimus</button>
                </div>
              </React.Fragment>
            );
          })
        }
        </form>
      );
}
