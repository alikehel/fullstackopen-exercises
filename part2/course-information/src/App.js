const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = ({ course }) => {
  // console.log(course)
  return (
    <div>
      {course.parts.map((part) => {
        return <Part key={part.name} name={part.name} count={part.exercises} />
      })}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.count}</p>
  )
}

const Total = ({ course }) => {
  let count = 0;
  course.parts.forEach(part => {
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

  return (
    <>
      <Course course={course} />
    </>
  )
}

export default App
