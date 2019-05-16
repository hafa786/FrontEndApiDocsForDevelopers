import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Navigation.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }


  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="content-box integration">
                <p>Use <a>DataFire</a> to build and run integrations for CustomSearch</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
