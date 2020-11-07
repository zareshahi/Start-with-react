import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('Counter - Updated!');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new  data from the server
    }
  }
  componentWillUnmount() {
    console.log('Counter - Unmount!');
  }
  render() {
    console.log('Counter - Rendered!');
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button className='btn btn-secoundary btn-sm' onClick={() => this.props.onIncrement(this.props.counter)}>
          increment
        </button>
        <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass = () => {
    //   set class for span if it's 0 or have value
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };

  formatCount = () => {
    //   put number in span if has number and 'zero' if it's 0
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };
}

export default Counter;
