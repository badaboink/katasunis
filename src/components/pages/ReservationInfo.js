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

export default function ReservationInfo(props) { //pagal indeksa?
  
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
    console.log(product);
  }, []);

  
  const getProduct = (id) => {
    //perduot php id? 
    fetch("http://localhost/katasunis/katasunis_backend/perziuretiRezervacija.php",{
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


  return (
    <div className="container">
          <div>
          <h3>{product.data}</h3>
          <h3>{product.laikas}</h3>
          <h3>{product.paslaugos}</h3>
          </div>   
      
    </div>
  );
}



