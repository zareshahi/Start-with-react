import React, { Component } from 'react';
class Counters extends Component {
  state = {
    counter: [
      {
        id: 0,
        value: 0,
      },
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
    ],
  };
  render() {
    return (
      <div>
        <span>show Counters</span>
      </div>
    );
  }
}

export default Counters;
