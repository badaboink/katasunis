//components/ProductList.js

import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductList extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div><ProductRow /></div>
        <div><ProductRow /></div>
        <div><ProductRow /></div>
      </div>
    );
  }
}

export default ProductList;