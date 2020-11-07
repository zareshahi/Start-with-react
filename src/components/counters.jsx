import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <span>show Counters</span>
        <button className='btn btn-primary btn-sm' onClick={onReset}>
          Reset All
        </button>
        {counters.map((c) => (
          <Counter key={c.id} counter={c} onDelete={onDelete} onIncrement={onIncrement} />
        ))}
      </div>
    );
  }
}

export default Counters;
