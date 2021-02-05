import React from 'react';
import ReactDOM from 'react-dom';

const Header =  (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.parts.name} {props.parts.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of Reat',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ];

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
