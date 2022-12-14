import React from "react";
import "../../App.css";
import "./Register.css";
import "../Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from 'react-alert'
import { useLocation } from "react-router-dom"

export default function AddProduct() {
      //const alert = useAlert()
      const [product, setProduct] = useState([]);
      
      const [titleInput, setTitleInput] = useState("");
      const [descriptionInput, setDescriptionInput] = useState("");
      const [priceInput, setPriceInput] = useState("");
      const [typeInput, setTypeInput] = useState("");
      const [sizeInput, setSizeInput] = useState("");
      const [weightInput, setWeightInput] = useState("");
      const [amountInput, setAmountInput] = useState("");
      const [colorInput, setColorInput] = useState("");
      const [photoInput, setPhotoInput] = useState("");

      const getProduct = (id) => {
        fetch("http://localhost/katasunis/katasunis_backend/prekesLookOne.php",{
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
            setProduct(data);
            setTitleInput(data.pavadinimas);
            setDescriptionInput(data.aprasas);
            setPriceInput(data.kaina);
            setTypeInput("Vaistai"); //kazkaip kitaip arba neparodys
            setSizeInput(data.dydis);
            setWeightInput(data.svoris);
            setAmountInput(data.kiekis);
            setColorInput(data.spalva);
            //del foto dar nzn
          });
      };     

      useEffect(() => {
        getProduct(id);
      }, []);


  const location = useLocation()
  const params = new URLSearchParams(location.search)

  let id = params.get("id");
  console.log("id: ",id)

  const Click = (event) => {

    let state = {
      id: id,
      title: titleInput,
      description: descriptionInput,
      price: priceInput,
      amount: amountInput,
      type: typeInput,
      size: sizeInput,
      weight: weightInput,
      color: colorInput,
      photo: photoInput
    };

    console.log("state: " + state);
    console.log(JSON.stringify(state));

    fetch("http://localhost/katasunis/katasunis_backend/prekesEdit.php", {
      // Enter your IP address here
      method: "POST",
      mode: "cors",
      body: JSON.stringify(state), // body data type must match "Content-Type" header
    }).then((response) => {
      console.log("response: "+response.status);
    });
    event.preventDefault();

    console.log(titleInput, descriptionInput, priceInput, amountInput, typeInput, sizeInput, weightInput,photoInput);
    // setTitleInput("");
    // setDescriptionInput("");
    // setPriceInput("");
    // setTypeInput("");
    // setSizeInput("");
    // setWeightInput("");
    // setAmountInput("");
    // setColorInput("");
    // setPhotoInput("");

    //sekmingas pranesimas:
    //setAlert(alert.show('Prek?? ??ra??yta s??kmingai!'));
    //let success = "Prek?? ??ra??yta s??kminagi";
    console.log("jau po visko")
  };
   
  return (
    // onSubmit={Click}
    <form className="form" onSubmit={Click}> 
      {
          <React.Fragment>
            <h2>Prek??s redagavimas</h2>
        <br></br>
        <div className="control">
          <label className="label" htmlFor="name">
            Pavadinimas
          </label>
          <input
            className="input"
            type="text"
            required
            id="name"
            defaultValue={product.pavadinimas}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="description">
            Apra??ymas
          </label>
          <input
            className="input"
            type="textarea"
            required
            id="description"
            defaultValue={product.aprasas}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="price">
            Kaina
          </label>
          <input
            className="input"
            type="number"
            required
            id="price"
            defaultValue={product.kaina}
            onChange={(e) => setPriceInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="amount">
            Kiekis
          </label>
          <input
            className="input"
            type="number"
            required
            id="amount"
            defaultValue={product.kiekis}
            onChange={(e) => setAmountInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="type">
            Prek??s tipas
          </label>
          <select
            className="input"
            id="type"
            required
            defaultValue={product.pavadinimas} //nerodys
            onChange={(e) => setTypeInput(e.target.value)}
          >
            <option value="-">-</option>
            <option value="??un?? maistas">??un?? maistas</option>
            <option value="Ka??i?? maistas">Ka??i?? maistas</option>
            <option value="Pauk????i?? maistas">Pauk????i?? maistas</option>
            <option value="Grau??ik?? maistas">Grau??ik?? maistas</option>
            <option value="Pauk????i?? narveliai">Pauk????i?? narveliai</option>
            <option value="Vaistai">Vaistai</option>
            <option value="Vitaminai">Vitaminai</option>
            <option value="Drabu??iai ??unims">Drabu??iai ??unims</option>
            <option value="Drabu??iai kat??ms">Drabu??iai kat??ms</option>
            <option value="Prie??i??ros priemon??s">Prie??i??ros priemon??s</option>
            <option value="Kita">Kita</option>
            
          </select>
        </div>
        <div className="control">
          <label className="label" htmlFor="weight">
            Svoris
          </label>
          <input
            className="input"
            type="number"
            required
            id="weight"
            defaultValue={product.svoris}
            onChange={(e) => setWeightInput(e.target.value)}
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="size">
            Dydis
          </label>
          <select
            className="input"
            id="size"
            defaultValue={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
          >
            <option value="-">-</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
       
        <div className="control">
          <label className="label" htmlFor="color">
            Spalva
          </label>
          <select
            className="input"
            id="color"
            defaultValue={product.spalva}
            onChange={(e) => setColorInput(e.target.value)}
          >
            <option value="-">-</option>
            <option value="Balta">Balta</option>
            <option value="Juoda">Juoda</option>
            <option value="Spalvota">Spalvota</option>
          </select>
        </div>
        <div className="control">
          <label className="label" htmlFor="amount">
            Nuotrauka
          </label>
          <input
            className="input"
            type="file"
            required
            id="photo"
            defaultValue={photoInput} //nerodys
            onChange={(e) => setPhotoInput(e.target.value)}
          />
          </div>
        <div className="actions">
        <button className="button" >
            I??saugoti pakeitimus</button>
        </div>
          </React.Fragment>
    }
    </form>
  );
}

     //TODO: visus patikrint ar pasikeite reiksme ar ne
     
    // let titleInput0="";
    // if(titleInput == "")  titleInput0 =product.pavadinimas;
    // else titleInput0=titleInput;
    // let descriptionInput0="";
    // if(descriptionInput == "")  descriptionInput0=product.aprasas;
    // else descriptionInput0=descriptionInput;
    // let priceInput0="";
    // if(priceInput == "")  priceInput0 =product.kaina;
    // else priceInput0=priceInput;
    // let amountInput0="";
    // if(amountInput == "")  amountInput0 =product.kiekis;
    // else amountInput0=amountInput;
    // let typeInput0="";
    // if(typeInput == "")  typeInput0 =product.tipas;
    // else typeInput0=typeInput;
    // let sizeInput0="";
    // if(sizeInput == "")  sizeInput0 =product.dydis;
    // else sizeInput0=sizeInput;
    // let weightInput0="";
    // if(weightInput == "")  weightInput0 =product.svoris;
    // else weightInput0=weightInput;
    // let colorInput0="";
    // if(colorInput == "")  colorInput0 =product.spalva;
    // else colorInput0=colorInput;
    // let photoInput0="";
    // if(photoInput == "")  photoInput0 =product.photo;
    // else photoInput0=photoInput;
   
// import React, { useState, useEffect } from "react";

// function EditForm({ id }) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     // fetch the data from the database using the provided ID
//     fetch(`http://localhost/api/data/${id}`)
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, [id]);

//   const handleChange = (event) => {
//     // update the corresponding field in the state
//     setData({
//       ...data,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     // save the updated data to the database
//     event.preventDefault();
//     fetch(`http://localhost/api/data/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(data),
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
    //   <label htmlFor="name

//TODO: reikia kad leistu redaguot jau paimtus duomenis

// //onClick={() => {
//   alert.show('Oh look, an alert!')
// }}

// Retrieve the data from the database and store it in a state variable.
// Use the useEffect hook to fetch the data from the database when the component is mounted.
// Use the setState function to update the state with the data from the database.
// Use the data from the state to populate the form fields.
// When the form is submitted, update the data in the database using a backend API.

// To edit data from a database in a React form, you can use a combination of a controlled form and the useEffect hook to fetch 
// the data from the database when the component mounts.import React, { useState, useEffect } from "react";
// A controlled form is a form where the values of the form elements are controlled by React state. 
// In the case of editing data from a database, the initial values of the form elements can be set to the data fetched from the database.
// Any changes made to the form elements will update the corresponding state, 
// which can then be used to update the database when the form is submitted.