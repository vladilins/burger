import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {};

  render() {
    return (
      <>
        <Burger ingerdients={this.state.ingerdients} />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
