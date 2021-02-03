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

// React Component names must be capitalized
const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/mishrole">mishrole</a>
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
    {/* If you use <footer /> the page is not going to display the
    content defined within the Footer component, and instead React
    only creates an empty footer element */}
    <Footer />

  </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
