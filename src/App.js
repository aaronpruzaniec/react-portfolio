import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import HeaderLinks from "./components/HeaderLinks";
import Item from "./components/Item";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="hero" className="masthead mb-auto text-center">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Portfolio</h1>
              <h2>Aaron Pruzaniec</h2>
            </main>
            <HeaderLinks />
          </div>
        </header>
        <div id="main">
          <div className="container">
            <div className="">
              <Item />
            </div>
          </div>
        </div>
        <footer className="container-fluid text-center" />
      </div>
    );
  }
}

export default App;
