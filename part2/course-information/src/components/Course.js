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

export default Course
