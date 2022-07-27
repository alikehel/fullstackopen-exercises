import { useState } from "react"

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>

// const Statistic = (props) => {

// }

const Statistics = ({ data }) => {
  // console.log(data)
  let newData = data.map((element, index) => {
    return (
      <p key={index} >{element[0]}: {element[1]}</p>
    )
  })

  // ALL
  let all = 0
  data.forEach(element => {
    all += element[1]
  });

  // AVERAGE
  let allWeights = 0, average
  data.forEach((element) => {
    allWeights += element[1] * element[2]
    // console.log(element[2], allWeights)
  });
  average = allWeights / all || 0

  // POSITIVE
  let positive = (data[0][1] / all) * 100 || 0



  return (
    <>
      {newData}
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [natural, setNatural] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name='Give Feedback' />
      <Button name='Good' onClick={() => setGood(good + 1)} />
      <Button name='Natural' onClick={() => setNatural(natural + 1)} />
      <Button name='Bad' onClick={() => setBad(bad + 1)} />
      <Header name='Statistics' />
      <Statistics data={[['good', good, 1], ['natural', natural, 0], ['bad', bad, -1]]} />
    </div>
  )
}

export default App
