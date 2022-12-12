import React from "react";
import "../../App.css";
import "./Table.scss"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export default function ViewProfiles()
{
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(null);
    const history = useHistory();
    useEffect(() => {
      getUsers();
    }, []);
    const getUsers = () => {
      fetch('http://localhost/katasunis/katasunis_backend/perziureti_naudotojus.php')
          .then((response) => response.json())
          .then((data) => setUsers(data));
    };
    const DeleteProfile = (event, id) => {
      // Only make the DELETE request when the "Šalinti" text is clicked
      if (event.target.innerHTML === "Šalinti") {
        // Send a DELETE request to the server with the user's ID
        fetch(`http://localhost/katasunis/katasunis_backend/istrinti_naudotojus.php?id=${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => {
          console.log(response);
          // You may want to update the list of users here by making another
          // request to the server to get the updated list of users
          window.location.reload();
        });
      }
      event.preventDefault();
    };
    return (
      <ul class="responsive-table">
           {
            users.map((user) => (
              
              <li class="table-row">
              <div class="col col-1">{user.vardas}</div>
              <div class="col col-2">{user.pavarde}</div>
              <div class="col col-3">{user.el_pastas}</div>
              <div class="col col-4">{user.lygis}</div>
              <div class="col col-4">{user.lytis}</div>
              <div class="col col-4">{user.telefono_numeris}</div>
              <div class="col col-4"> 
              <Link
              to={{ pathname: `/Redaguoti-naudotoja/${user.id}`, state: id }}
              className={`card-wrapper restore-${id}`}
            >
              Redaguoti
            </Link></div>
              <div class="col col-4" onClick={(event) => DeleteProfile(event, user.id)} data-label="Salinti"><button>Šalinti</button></div>
              </li>
            ))
            }
      </ul>
    );
}