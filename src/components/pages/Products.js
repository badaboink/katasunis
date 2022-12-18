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
import { Modal } from "../ModalPrekes";
function Products() {

  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [prodId, setProductId] = useState();

  useEffect(() => {
    getProducts();
  }, [products]);

  
  const getProducts = () => {
    fetch("http://localhost/katasunis/katasunis_backend/prekesLookAll.php")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  const DeleteProduct = () => { //event, id

    let state = {
      id: prodId,
    };

      fetch(`http://localhost/katasunis/katasunis_backend/prekesDelete.php`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      }).then((response) => {
        console.log(response);
        hideModalHandler();
        //window.location.reload();
      });
    
    //event.preventDefault();

    console.log("trinama: "+prodId);
  };

  const showModalHandler = (prodId) => {
    setShowModal(true);
    setProductId(prodId);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    
    <div className="container">
  <Modal
        show={showModal}
        hide={hideModalHandler}
        onRemoveProduct={DeleteProduct}
      ></Modal>

    <header className="header">
      <h1>AUGINTINIŲ PREKĖS</h1>
    </header>

    <center>
    <div>
      <Link to='/kurti-preke'> Kurti prekę</Link>
    </div>
    </center>
    <br></br>
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
        <Button size="small"><Link to={'/redaguoti-preke?id='+ product.id}> REDAGUOTI  </Link></Button>
        <Button size="small" 
         onClick={() =>
          showModalHandler(product.id)  //onClick={(event) => DeleteProduct(event, product.id)}
        }
        >ŠALINTI</Button>
        
      </CardActions>
        </Card>
        
    ))}
    </div>
   
    </div>
  );
}

        

export default Products;

// to={{ 
//   pathname: `/produktas/{product.id}`, 
//   query: {
//     produktas: JSON.stringify(product)
//   }}} 