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
        return <Part key={part.id} name={part.name} count={part.exercises} />
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
  // let count = 0;
  // course.parts.forEach(part => {
  //   count += part.exercises
  // });
  let count = course.parts.reduce((total, curr) => {
    total += curr.exercises
    return total
  }, 0)
  return (
    <p>Number of exercises {count}</p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {
        courses.map((course) => {
          return <Course key={course.id} course={course} />
        })
      }
    </>
  )
}

export default App
