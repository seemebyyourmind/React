import React, { useState } from 'react';

function Counter() {

   const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  };

  function handleReset() {
    setCount(0);
  };


  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter





// import React, { Component } from "react";

// export default class Counter extends Component {
//   state = { count: 0 };

//   handleIncrement = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   handleDecrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };

//   handleReset = () => {
//     this.setState({ count: 0 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleDecrement}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleIncrement}>+</button>
//         <br />
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }
