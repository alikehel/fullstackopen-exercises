import { useState } from "react"

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>

const Statistics = ({ data }) => {
  // console.log(data)
  return (
    data.map(element => {
      return (
        <p>data: {element}</p>
      )
    })
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
      <Statistics data={[good, natural, bad]} />
    </div>
  )
}

export default App
