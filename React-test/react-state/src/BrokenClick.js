import React, { Component } from "react";

class BrokenClick extends Component {
  // if using this method then you don't need to bind in constructor. babel takes care
  handleClick = e => {
    this.setState({ clicked: true });
  };
  // if using this then you don't need to have a constructor. Babel takes care of creating it for you
  state = { clicked: false };

  //   constructor(props) {
  //     super(props);
  //     this.state = { clicked: false };
  //     //this.handleClick = this.handleClick.bind(this);
  //   }
  //    handleClick(e) {
  //     this.setState({ clicked: true });
  //   }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!!!" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default BrokenClick;
