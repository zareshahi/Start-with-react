import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
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

  constructor() {
    super();
    console.log("App - constructor");
  }

  componentDidMount() {
    console.log("App - mounted!");
  }

  handleDelete = (counterId) => {
    //   delete one counter from counters list
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    //   increment counter value by id - call in counter component

    // Method 1 (mine)
    // const counters = this.state.counters.map((c) => {
    //   c.id === counter.id && c.value++;
    //   return c;
    // });

    // Method 2 (special)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handleReset = () => {
    //   reset all counters value to zero
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App - rendered!");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
