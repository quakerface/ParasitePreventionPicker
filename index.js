import React from "react";
import ReactDOM from "react-dom";
import { InputAddress } from "./requestPlace.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faThermometerHalf, faThermometerFull, faThermometerQuarter, faBug } from '@fortawesome/free-solid-svg-icons'
 

library.add(fab, faThermometerFull, faThermometerHalf, faThermometerQuarter, faBug)


let address;

class Hello extends React.Component {
  render() {
    return <h1 class="page-header">Parasite prevention picker for dogs</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app row">
          <div className="col-md-1"></div>
          <div className="col-md-10 text-center">
          <Hello />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-1"></div>
          <div className="col-md-10 text-center">
          <InputAddress />
          </div>
          <div className="col-md-1"></div>

          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
