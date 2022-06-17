import { useState } from "react";

function HookState1() {
  const [click, ] = useState('GeekforGeeks');
  return (
    <h1>Welcome to { click }</h1> 
  );
}

// useState() first value is the initial value, the second is the reference to the function that can be used to update the varaible
function HookState2() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <p>You clicked { click } times</p>
      <button onClick={() => setClick(click + 1)}>
        Click me
      </button>
    </div>
  );
}

function HookState3() {
  const [click, setClick] = useState(0);
  return (
    <div>
      <p>You've clicked { click } times!</p>
      <p>The number of times you have clicked is { click % 2 === 0 ? 'even' : 'odd' }</p>
      <button onClick={ () => setClick(click => click + 1) }>
        Click me
      </button>
    </div>
  );
}

// array as state variable with the help of spread operator inside addNumber internal function
function HookState4() {
  const [click, setClick] = useState([]);
  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length, 
        value: Math.random() * 10
      }
    ]);
  };
  return (
    <div>
      <ul>
        {click.map(item => (
          <li key={ item.id }>{ item.value }</li>
        ))}
      </ul>
      <button onClick={ addNumber }>
        Click me
      </button>
    </div>
  );
}

// object as a state variable
function HookState5() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const [submit, submitted] = useState(false);

  const printValues = e => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password
    });
    submitted(true);
  };

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={ printValues }>
        <label>
          Username:
          <input 
            value={ data.username }
            name="username"
            onChange={ updateField }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={ data.password }
            name="password"
            type="password"
            onChange={ updateField }
          />
        </label>
        <br />
        <button>Submit</button>
      </form>

      <p>{ submit ? form.username : null }</p>
      <p>{ submit ? form.password : null }</p>
    </div>
  );
}

export { HookState1, HookState2, HookState3, HookState4, HookState5 };