import React from "react";
import "../../App.css";
import "./products.scss";
import sampleImage from "../../pedigree.jpg";
import Grid from '@mui/material/Grid';
//import Item from '@mui/material/Item';
//import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import { useState} from "react";
import {
  useParams
} from "react-router-dom";
import { useLocation } from "react-router-dom"

export default function ProductInfo(props) { //pagal indeksa?
  
  // const { from } = JSON.parse(this.props.produktas)

    // this.props.state

//console.log() //from
  //pasiimt id is url
  const location = useLocation()
  const params = new URLSearchParams(location.search)
 
  let id = params.get("id");

const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id);
  }, []);

  
  const getProduct = (id) => {
    //perduot php id?
    fetch("http://localhost/katasunis_backend/prekesLookOne.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };



  return (
    <div className="container">
        {product.map((product0, index) => (
          <div>
          <img src={sampleImage} alt="Sample" height="450" />
          <h3>{product0.pavadinimas}</h3>
          <h3>{product0.kaina}</h3>
          </div>

        ))}
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <img src={sampleImage} alt="Sample" height="450" />
      </Grid>
       <Grid item xs={6}>
      <p>2</p>
      </Grid>
      <Grid item xs={6}>
      <p>3</p>
      </Grid>
      <Grid item xs={6}>
      <p>4</p>
      </Grid>
    </Grid> */}
      {/* <center>
        <header className="header">
          <h1>PREKĖS INFORMACIJA</h1>
        </header>
        <div className="col-md-2">
          <img src={sampleImage} alt="Sample" height="150" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>data.pavadinimas</h4>
          <p>data.aprasas</p>
          <p>data.kiekis</p>
          <p>data.svoris</p>
          <p>data.spalva</p>
          <p>data.dydis</p>
        </div>
        <div className="col-md-2">data.kaina</div>
      </center> */}
    </div>
  );
}



