import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import "bootstrap/dist/css";

import Button from "react-bootstrap/lib/Button";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
