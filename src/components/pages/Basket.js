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

import React, { Component } from 'react';
import '../../App.css';
import './Basket.css';
import ProductRow from '../ProductRow';
import { Button } from '../Button';

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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
          <div><ProductRow /></div>
          <div>x</div>
          </div>

          <Button>Pirkti</Button>
        </div>
      );
    }
  }

export default Basket;