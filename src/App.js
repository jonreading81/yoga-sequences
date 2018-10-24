import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import NeckAndShoulderTheraphy from './components/NeckAndShoulderTheraphy';
import UpperBackAndShoulders from './components/practice/UpperBackAndShoulders';
import Amy_07_08_2018 from './components/practice/Amy_07_08_2018';
import Mike_10_2018 from './components/practice/Mike_10_2018';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
    <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/"><a>Call of the Forest Yoga</a></LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
          </Nav>
        </Navbar>
          <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/neck-and-shoulder-theraphy" component={NeckAndShoulderTheraphy} />
              <Route path="/upper-back-and-shoulders" component={ UpperBackAndShoulders} />
               <Route path="/amy-07-08-2018" component={ Amy_07_08_2018 } />
               <Route path="/mike-10-2018" component={ Mike_10_2018 } />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
