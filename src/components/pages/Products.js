import React from 'react';
import '../../App.css';
import './products.scss';
import ProductList from '../ProductList';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  
  const getProducts = () => {
    fetch("http://localhost/katasunis_backend/prekesLookAll.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };



  return (
    <div className="container">


    <header className="header">
      <h1>AUGINTINIŲ PREKĖS</h1>
    </header>
    <div className="grid-container">
    {products.map((product, index) => (
      
       
        <Card key={index} sx={{ width: 275 }}>
          <CardContent >
          <CardMedia
          component="img"
          height="140"
          // nuotrauka is db
          src= "https://happydog_en_sb.cstatic.io/600x600/f/69110/600x600/83b4bf51ab/hd-desktop-stage-produkt-young_en.png"
          alt="green"
          />
          <br></br>
            <h3>{product.pavadinimas}</h3>
            <br></br>
            <Typography variant="body2" color="text.secondary">
            {product.aprasas}
          </Typography>
          <br></br>
          <h3>{product.kaina} eur</h3></CardContent>
          <CardActions>
            
        <Button size="small"><Link to={'/produktas?id='+ product.id}> PERŽIŪRĖTI  </Link></Button>
      </CardActions>
        </Card>
        
    ))}
    </div>
    <center>
    <div>
      <Link to='/kurti-preke'> Kurti prekę</Link>
    </div>
    </center>
    </div>
  );
}

        

export default Products;

// to={{ 
//   pathname: `/produktas/{product.id}`, 
//   query: {
//     produktas: JSON.stringify(product)
//   }}} 