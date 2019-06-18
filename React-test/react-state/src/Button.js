import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        // onClick={() => {
        //   alert("CLICKED!!");
        // }}

        onClick={function() {
          alert("CLICKED!!");
        }}
      >
        Click Me!
      </button>
    );
  }
}

export default Button;
