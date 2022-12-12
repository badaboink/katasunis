import React from "react";
import "../../App.css";
import "./products.scss";
import sampleImage from "../../pedigree.jpg";
import Grid from '@mui/material/Grid';
//import p from '@mui/material/p';
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
 
  //TODO: reikia perduot id i prekesLookOne.php ir is ten gaut viena preke
  //BET dabar CORS policy neveikia, ir galimai kreipsis i php greiciau nei id nuskaitys is url, tai id null del to gales but
  let id = params.get("id");
  //loaderiai ir spinneriai 
  //let id=5;
  console.log("id: ",id)

const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(id);
  }, []);

  
  const getProduct = (id) => {
    //perduot php id?
    fetch("http://localhost/katasunis_backend/prekesLookOne.php",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  };
 //TODO:su nuotrauka visur
 //tikrint ar ne null values ir konstruot string tada
 
let spalva="";
if(product[5]!=null){
  spalva = "Spalva: " + product[5];
}
let dydis="";
if(product[6]!=null){
  dydis = "Dydis: " + product[6];
}
  return (
    <div className="container">
      <h1>PREKĖS PERŽIŪRA</h1>
      <Grid container spacing={3} justify = "center">
      <Grid item xs={6}>
      <p><img src={sampleImage} alt="Sample" height="450"/></p>
      </Grid>
      <Grid item xs={6} marginTop >
      <h3>Pavadinimas: {product[1]}</h3>
      <p>Aprašymas: {product[4]}</p>
      <h3>Turime sandėlyje: {product[3]}</h3>
      <h3>Svoris: {product[7]} kg</h3>
      <h3>{spalva}</h3>
      <h3>{dydis} </h3>
      <h3>Kaina: {product[2]} eur</h3>
      <button className="button">Į krepšelį</button>
      </Grid>
      </Grid>
      </div>
  );
}