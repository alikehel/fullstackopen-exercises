import { useState } from "react"

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>

const StatisticLine = ({ name, weight, value }) => {
  // console.log(name, weight, value)
  return (
    // <p>{name} {weight && `(${weight})`} = </p>
    <p>{name} = {value}</p>
  )
}

const Statistics = ({ data }) => {
  // console.log(data)

  // ALL
  let all = 0
  Object.entries(data).forEach(
    ([key, value]) => all += value[1]
  );

  // AVERAGE
  let allWeights = 0, average
  Object.entries(data).forEach(([key, value]) => {
    allWeights += value[0] * value[1]
    // console.log(element[2], allWeights)
  });
  average = allWeights / all || 0

  // POSITIVE
  let positive = (data.good[1] / all) * 100 || 0

  if (all == 0) {
    return (
      <p>No Feedback Given</p>
    )
  }

  return (
    <>
      <StatisticLine name={'Good'} weight={data.good[0]} value={data.good[1]} />
      <StatisticLine name={'Natural'} weight={data.natural[0]} value={data.natural[1]} />
      <StatisticLine name={'Bad'} weight={data.bad[0]} value={data.bad[1]} />
      <StatisticLine name={'All'} value={all} />
      <StatisticLine name={'Average'} value={average} />
      <StatisticLine name={'Positive'} value={positive} />
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
      <Button name='Good (1)' onClick={() => setGood(good + 1)} />
      <Button name='Natural (0)' onClick={() => setNatural(natural + 1)} />
      <Button name='Bad (-1)' onClick={() => setBad(bad + 1)} />
      <Header name='Statistics' />
      {/* <Statistics data={[['good', good, 1], ['natural', natural, 0], ['bad', bad, -1]]} /> */}
      <Statistics data={{ 'good': [1, good], 'natural': [0, natural], 'bad': [-1, bad] }} />
    </div>
  )
}

export default App
