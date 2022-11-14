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
import "./Basket.css";
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
        <div className="row product">
          <Link to="/salinti">X</Link>
          <div className="col-md-2">
            <img src={sampleImage} alt="Sample" height="150" />
          </div>
          <div className="col-md-8 product-detail">
            <h4>Šunų ėdalas "Pedigree"</h4>
            <p>Tinka tiek mažiems, tiek jau paaugusiems šuniukams.</p>
          </div>
          <div className="col-md-2 product-price">
            <p>19.99 eur</p>
            <p>kiekis:</p>
            <input type="int" />
          </div>
          <div>x</div>
        </div>
        <div>
          <Link to="/pirkti">Pirkti</Link>
        </div>
      </div>
    );
  }
}

export default Basket;
