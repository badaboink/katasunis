import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
