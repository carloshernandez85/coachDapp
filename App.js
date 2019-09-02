import React, { Component } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Hero from './Hero';
import Form from './Form';
import Footer from './layout/Footer'
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import pages
import Home from './layout/pages/Home';
import About from './layout/pages/About';
import Contacts from './layout/pages/Contacts';
import NotFound from './layout/pages/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br/>
        <br/>
        <Hero />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        <Form />
          <br/>
        <Footer />    
      </div>
    );
  }
}

export default App;
