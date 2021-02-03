import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div>
      <p>Hello Component</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return(
  <div>
    <p>Hello world, it is {now.toString()}</p>
    <p>{a} plus {b} is {a+b}</p>
    <Hello />
  </div>)
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
