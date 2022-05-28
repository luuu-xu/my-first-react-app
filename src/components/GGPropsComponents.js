import { Component } from "react";

// Class Component
class DemoComponentClass extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.user}</h2>
        <h3>Welcome to GeekforGeeks Class Component</h3>
      </div>
    );
  }
}

// Functional Component
function DemoComponentFunction(props) {
  return (
    <div>
      <h2>Hello {props.user}</h2>
      <h3>Welcome to GeekforGeeks Functional Component</h3>
    </div>
  );
}

// Passing information from one component to another
// Parent Component
class Parent extends Component {
  render() {
    return (
      <div>
        <h2>You are inside Parent Component</h2>
        <Child name="luuu-xu" userId="9109" />
      </div>
    );
  }
}

// Child Component
class Child extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h3>You are inside Child Component</h3>
        <h3>Your user id is: {this.props.userId}</h3>
      </div>
    );
  }
}

// defaultProps
class DefaultPropsComponent extends Component {
  render() {
    return (
      <div>
        {/* using default props - title */}
        <h1>This is {this.props.title}'s website!</h1>

        {/* accessing array prop directly */}
        <h1>The names of students are: {this.props.names}</h1>

        {/* with namesIteratorInside function */}
        <h1>{this.props.names.map(
          function namesIteratorInside(item, i) {
            return (
              "Inside Students " + (i + 1) + ": " + item + ((i !== 2) ? ", " : "\n")
            )
          }
        )}</h1>

        {/* with namesIteratorOutside function */}
        <h1>{this.namesIteratorOutside(this.props.names)}</h1>
      </div>
    );
  }

  namesIteratorOutside(names) {
    return names.map(
      (item, i) => {
        return "Outside Students " + (i + 1) + ": " + item + ((i !== 2) ? ", " : "\n")}
    );
  }
}

DefaultPropsComponent.defaultProps = {
  title: "luuu-xu",
  names: ['Ram', 'Shyam', 'Ryan']
}

export { DemoComponentClass, DemoComponentFunction, Parent, DefaultPropsComponent };