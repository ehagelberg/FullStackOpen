import React from 'react';

const Header = ({course}) => {
  return(
  <h2>{course.name} </h2>
  )
}

const Part = ({part, exercises}) => {
  return(
  <p>
    {part} {exercises}
  </p>
  )
}

const Content = ({parts}) => {
  return(
  <div>
    {parts.map((part) => 
    <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
  </div>
  )
}


const Total = ({parts}) => {

  return (
  <>
    <b>total of {parts.reduce((acc, current) => 
    acc + current.exercises, 0)} exercises </b>
  </>
  )
}


const Course = ({courses}) => {
  return(
    <>
    <h1>Web development curriculum</h1>
      {courses.map((course) => [
      <Header key={"h"+course.id} course={course}/>,
      <Content key={"c" + course.id} parts={course.parts}/>,
      <Total key={"t" + course.id} parts={course.parts}/>
      ])}
    </>
  )
}

export default Course