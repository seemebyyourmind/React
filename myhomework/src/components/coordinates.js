import React from 'react';
import { useState } from 'react';

function Coordinates(props) {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleMouseMove(event) {
    setX(event.clientX)
    setY(event.clientY)
  };

  function componentDidMount() {
    window.addEventListener("mousemove", handleMouseMove);
  }

  function componentWillUnmount() {
    window.removeEventListener("mousemove", handleMouseMove);
  }

  return (
    <div>
      <p>
        {x}-{y}
      </p>
    </div>
  );
}

export default Coordinates;
// import React, { Component } from "react";

// export default class Coordinates extends Component {
//   state = { x: 0, y: 0 };

//   componentDidMount() {
//     window.addEventListener("mousemove", this.handleMouseMove);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("mousemove", this.handleMouseMove);
//   }

//   handleMouseMove = event => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>
//           {this.state.x} - {this.state.y}
//         </p>
//       </div>
//     );
//   }
// }
