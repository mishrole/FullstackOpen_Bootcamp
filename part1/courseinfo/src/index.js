import React from 'react';
import ReactDOM from 'react-dom';

const Header =  (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1.name} exercise={props.part1.exercise} />
      <Part part={props.part2.name} exercise={props.part2.exercise} />
      <Part part={props.part3.name} exercise={props.part3.exercise} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercise + props.part2.exercise + props.part3.exercise}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of Reat',
    exercise: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }

  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total part1 = {part1} part2 = {part2} part3 = {part3}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
