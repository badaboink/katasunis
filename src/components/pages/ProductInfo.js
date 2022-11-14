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

import React from "react";
import "../../App.css";
import "./products.css";
import sampleImage from "../../pedigree.jpg";

function ProductInfo() {
  return (
    <div className="container">
      <center>
        <header className="header">
          <h1>PREKĖS INFORMACIJA</h1>
        </header>
        <div className="col-md-2">
          <img src={sampleImage} alt="Sample" height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>Šunų ėdalas "Pedigree"</h4>
          <p>Tinka tiek mažiems, tiek jau paaugusiems šuniukams.</p>
        </div>
        <div className="col-md-2">19.99 eur</div>
      </center>
    </div>
  );
}

export default ProductInfo;
