import { Component } from "react";

class CounterComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click me to count up!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default CounterComponent;