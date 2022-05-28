import { Component } from "react";

class GGClock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState(
      { time: new Date() }
      )
  }

  render() {
    return (
      <div>
        <h1>Welcome to { this.props.title } !</h1>
        <h2>{ this.state.time.toLocaleTimeString() }</h2>
      </div>
    );
  }
}

export { GGClock };