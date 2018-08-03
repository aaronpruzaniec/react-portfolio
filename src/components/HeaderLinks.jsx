import React, { Component } from "react";

class HeaderLink extends Component {
  state = {
    selected: ""
  };

  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner mt-4 mb-4">
          <p>
            <a href="https://github.com/aaronpruzaniec/portfolio">GitHub</a> •{" "}
            <a href="https://www.linkedin.com/in/aaronpruzaniec/">LinkedIn</a> •{" "}
            <a href="pdf/aaron_pruzaniec_resume.pdf">Résumé</a> •{" "}
            <a href="mailto:aaronpruzaniec@gmail.com">Contact</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default HeaderLink;
