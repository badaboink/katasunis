// import React from 'react';
// import '../../App.css';
// //className='products'
// export default function Products() {
//   return (
//   <div>
//   <h1>PRODUCTS</h1>
//   <button>Pridėti naują prekę</button>
//   </div>
//   );
// }

import React, { Component } from "react";
import "../../App.css";
import "./Basket.scss";
import ProductRow from "../ProductRow";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import sampleImage from "../../pedigree.jpg";

class Basket extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="container main-content">
        <header className="header">
          <h1>Prekių krepšelis</h1>
        </header>
        <div class="container">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">Prekė</div>
              <div class="col col-2">Pavadinimas</div>
              <div class="col col-3">Kiekis</div>
              <div class="col col-4">Kaina</div>
              <div class="col col-5"></div>
            </li>
            <li class="table-row">
              <div class="col col-1" data-label="Foto">
                <img src={sampleImage} alt="Sample" height="100" />
              </div>
              <div class="col col-2" data-label="Pavadinimas">
                Šunų ėdalas "Pedigree"
              </div>
              <div class="col col-3" data-label="Kiekis">
                <input
                  defaultValue={1}
                  type="number"
                  id="count"
                  name="count"
                  min="0"
                  max="100"
                />
              </div>
              <div class="col col-4" data-label="Kaina">
                19.99 eur
              </div>
              <div class="col col-5" data-label="delete">
                <Link to="/salinti">Šalinti</Link>
              </div>
            </li>
          </ul>
        </div>
        <div><br></br>
          <center>
            <Link to="/pirkti">Pirkti</Link>
          </center>
        </div>
      </div>
    );
  }
}

export default Basket;
