import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/header';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Carousel from './components/Carousel/carousel';
import Notfound from './components/Not Found/notfound';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      
     <div><Header/><Carousel/><h1>App Js</h1><Home/><Login/><Notfound/></div>
    );
  }
}

export default App;