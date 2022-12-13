import React from "react";
import "../../App.css";
import "./Table.scss";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';

export default function Orders() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  
  const getProducts = () => {
    fetch("http://localhost/katasunis/katasunis_backend/user_uzsakymai.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };
  return (
    <React.Fragment>
      <center>
        <h1>VISI UŽSAKYMAI:</h1>
      </center>

      <div class="container">
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Užsakymo nr.</div>
      <div class="col col-2">Klientas</div>
      <div class="col col-3">Adresas</div>
      <div class="col col-4">Prekės</div>
      <div class="col col-5">Suma</div>
      <div class="col col-6">Statusas</div>
    </li>
    {products.map((product, index) => (
      <li class="table-row">
      <div class="col col-1" data-label="Užsakymo nr.">{product.uzsakymo_nr}</div>
      <div class="col col-2" data-label="Klientas">{product.klientas}</div>
      <div class="col col-3" data-label="Adresas">{product.adresas}</div>
      <div class="col col-4" data-label="Prekės">{product.prekes}</div>
      <div class="col col-5" data-label="Suma">{product.suma}</div>
      <div class="col col-6" data-label="Statusas">{product.statusas}</div>
    </li>
  ))}
  </ul>
</div>
    </React.Fragment>
  );
}
