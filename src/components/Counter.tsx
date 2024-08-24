import React, { Component } from 'react';


interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {

  state: CounterState = {
    count: 0
  };

  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }


  
  render() {
    return (
      <div className='name'>
        <p className='para'>Count: {this.state.count}</p>
        <button className='btn' onClick={this.increment}>Increment</button> <br />
        <button className='btn2' onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

// Export the component
export default Counter;
