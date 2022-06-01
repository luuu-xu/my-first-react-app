import './App.css';
import MyComponent from './components/MyComponent';
import CounterComponent from './components/CounterComponent';
import { Component } from 'react';
import ClockComponent from './components/ClockComponent';
import { DefaultPropsComponent, DemoComponentClass, DemoComponentFunction, Parent } from './components/GGPropsComponents';
import { GGClock } from './components/GGStateComponents';
import { HookState1, HookState2, HookState3, HookState4, HookState5 } from './components/GGuseStateHook';

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
        <MyComponent title="Reactttt" onButtonClicked={this.onClickBtn} />
        <CounterComponent />
        <ClockComponent />
        <DemoComponentClass user="luuu-xu" />
        <DemoComponentFunction user="luuu-xu"/>
        <Parent />
        <DefaultPropsComponent />
        <GGClock title="luuu-xu" />
        <HookState1 />
        <HookState2 />
        <HookState3 />
        <HookState4 />
        <HookState5 />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <MyComponent title="Hello World"/>
//     </div>
//   );
// }

export default App;
