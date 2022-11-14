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

import React from 'react';
//import './App.css';
import '../../App.css';
import './products.css';
import ProductList from '../ProductList';

function Products() {
  return (
    <div className="container">
      <header className="header">
        <h1>AUGINTINIŲ PREKĖS</h1>
      </header>
      <ProductList/>
      <a href='./PrekesAdmin'>Kurti naują prekę</a>
     
      
    </div>
  );
}

export default Products;