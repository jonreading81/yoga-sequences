import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import NeckAndShoulderTheraphy from './components/NeckAndShoulderTheraphy';
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
            <NavDropdown eventKey={1} title="Sequences" id="basic-nav-dropdown">
              <LinkContainer to="/neck-and-shoulder-theraphy">
                  <MenuItem eventKey={1.1}>Neck and Shoulder theraphy</MenuItem>
              </LinkContainer>
              <LinkContainer to="/upper-back">
                  <MenuItem eventKey={1.2}>Upper back and shoulders</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar>
          <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/neck-and-shoulder-theraphy" component={NeckAndShoulderTheraphy} />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
