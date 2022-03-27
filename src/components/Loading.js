import React, { Component } from "react";
import { Loader } from "../styles/Loader";

export default class Loading extends Component {
  render() {
    return (
      <Loader>
        <div>
          <img
            src="https://github.com/CarlinGebyte/Sprint-2-AG/blob/main/src/assets/img/Color=white,%20Container=No.png?raw=true"
            alt="daily bits"
          ></img>
        </div>
      </Loader>
    );
  }
}
