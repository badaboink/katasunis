import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
<<<<<<< HEAD
import PrekesAdmin from './components/pages/PrekesAdmin';
=======
<<<<<<< HEAD
import Basket from './components/pages/Basket';
=======
import Reservations from './components/pages/Reservations';
import AddReservation from './components/pages/AddReservation';
>>>>>>> 463a385add7543213a5703780f97cec6ffe68a47
>>>>>>> 6092cebc5563dc962df76c76605f2d31edde613b

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
<<<<<<< HEAD
          <Route path='/prekesadmin' component={PrekesAdmin} />
=======
<<<<<<< HEAD
          <Route path='/krepselis' component={Basket} />
=======
          <Route path='/rezervacijos' component={Reservations} />
          <Route path='/kurti-rezervacija' component={AddReservation} />
>>>>>>> 463a385add7543213a5703780f97cec6ffe68a47
>>>>>>> 6092cebc5563dc962df76c76605f2d31edde613b
        </Switch>
      </Router>
    </>
  );
}

export default App;
