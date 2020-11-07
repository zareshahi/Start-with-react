import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    return (
      <div>
        <span>show Counters</span>
        <button className='btn btn-primary btn-sm' onClick={this.props.onReset}>
          Reset All
        </button>
        {this.props.counters.map((c) => (
          <Counter key={c.id} counter={c} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} />
        ))}
      </div>
    );
  }
}

export default Counters;
