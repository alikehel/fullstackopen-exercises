const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content course={course} />
      {/* <Total /> */}
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Part name={course.parts[0].name} count={course.parts[0].exercises} />
      <Part name={course.parts[1].name} count={course.parts[1].exercises} />
      <Part name={course.parts[2].name} count={course.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.count}</p>
  )
}

const Total = (props) => {
  let count = 0;
  props.parts.forEach(part => {
    count += part.exercises
  });
  return (
    <p>Number of exercises {count}</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
