import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      {/* If the value of the prop is achieved using Javascript,
       it must be wrapped with curly braces */}
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const name = 'Mitch';
  const age = 23;

  return(
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <Hello name="Klaus" age={26 + 10} />
    <Hello name={name} age={age} />
  </div>)
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
