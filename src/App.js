import MyComponent from './components/MyComponent';
import CounterComponent from './components/CounterComponent';
import { Component } from 'react';
import ClockComponent from './components/ClockComponent';
import { TOPHooks, TOPuseEffect } from './components/TOPHooks';
import NavBar from './routes/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  } 

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h1>Hello from App</h1>
        </div>
        <br></br>
        <MyComponent title="Reactttt" onButtonClicked={this.onClickBtn} />
        <CounterComponent />
        <ClockComponent />

        <TOPHooks />
        <TOPuseEffect />
      </div>
    );
  }
}

export default App;
