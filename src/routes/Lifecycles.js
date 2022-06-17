import { Component } from 'react';
import CounterLifecycles from '../components/CounterLifecycles';
import NavBar from './NavBar';

class Lifecycles extends Component {
  constructor() {
    super();

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
    };
    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()});
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)});
    this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent});
  }

  render() {
    return (
      <div>
        <NavBar />
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        <button onClick={this.ignoreProp}>Ignore Prop</button>
        <button onClick={this.seedGenerator}>Generate Seed</button>
        <button onClick={this.toggleError}>Toggle Error</button>
        {this.state.mount ? 
          <CounterLifecycles
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          /> : 
          null}
      </div>
    );
  }
};

export default Lifecycles;