import React, { Component } from "react";

class HeaderLink extends Component {
  state = [
    ["GitHub", "https://github.com/aaronpruzaniec/react-portfolio"],
    ["LinkedIn", "https://www.linkedin.com/in/aaronpruzaniec/"],
    ["Contact", "mailto:aaronpruzaniec@gmail.com"]
  ];

  render() {
    let builtItems = this.state.map(state => {
      return (
        <span class="headerOuter">
          <a href={state[1]}>{state[0]}</a>
          <span className="bul"> • </span>
        </span>
      );
    });
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner mt-4 mb-4">
          <p>{builtItems}</p>
        </div>
      </footer>
    );
  }
}

export default HeaderLink;
