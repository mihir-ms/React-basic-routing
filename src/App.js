import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent/MenuComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">MS Restaurent</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}

export default App;
