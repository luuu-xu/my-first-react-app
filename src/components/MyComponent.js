import React, { Component } from 'react';

class MyComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click me to see console log!</button>
      </div>
    );
  }
}

// function MyComponent(props) {
//   return <div>{props.title}</div>;
// }

// function MyComponent({ title }) {
//   return <div>{title}</div>;
// }

export default MyComponent;
