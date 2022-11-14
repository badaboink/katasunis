import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import PrekesAdmin from './components/pages/PrekesAdmin';
import Basket from './components/pages/Basket';
import Reservations from './components/pages/Reservations';
import AddReservation from './components/pages/AddReservation';
import AddService from './components/pages/AddService';
import AddProduct from './components/pages/AddProduct';
import Orders from './components/pages/Orders';
import Buy from './components/pages/Buy';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/paslaugos' component={Services} />
          <Route path='/prekes' component={Products} />
          <Route path='/prisijungimas' component={SignUp} />
          <Route path='/registracija' component={Register} />
          <Route path='/prekesadmin' component={PrekesAdmin} />
          <Route path='/krepselis' component={Basket} />
          <Route path='/rezervacijos' component={Reservations} />
          <Route path='/uzsakymai' component={Orders} />
          <Route path='/kurti-rezervacija' component={AddReservation} />
          <Route path='/kurti-paslauga' component={AddService} />
          <Route path='/kurti-preke' component={AddProduct} />
          <Route path='/pirkti' component={Buy} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
