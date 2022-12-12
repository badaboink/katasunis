//components/ProductRow.js

import React from 'react';
import sampleImage from '../pedigree.jpg';

const ProductRow = () => {
  return (
    
    <div className="row product">
      <a href="/produktas" style={{ textDecoration: 'none'}}>
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Šunų ėdalas "Pedigree"</h4>
        <p>Tinka tiek mažiems, tiek jau paaugusiems šuniukams.</p>
      </div>
      <div className="col-md-2 product-price">
        19.99 eur
      </div>
      {/* ar yra sandely rodyt */}
      </a>
      
    </div>
    
  );
}

export default ProductRow;