import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [highestVote, setHighestVote] = useState(-1)

  const updateNumber = () => {
    const randomNum = (Math.random() * (anecdotes.length - 1)).toFixed()
    setSelected(randomNum)
    // console.log(randomNum)
  }

  const updateVotes = () => {
    let arr = [...votes]
    arr[selected] += 1
    setVotes(arr)
    setHighestVote(votes.indexOf(Math.max(...votes)))
    // console.log(highestVote)
    // console.log(anecdotes[votes.indexOf[Math.max(...votes)]])
  }

  return (
    <>
      <h1>Anecdotes Of The Day</h1>
      <div>{anecdotes[selected]} has {votes[selected]} votes</div>
      <Button onClick={updateVotes} name={'Vote'} />
      <Button onClick={updateNumber} name={'Next Anecdotes'} />
      <h1>Anecdotes With Most VOTES</h1>
      {highestVote == -1 ? <div>No Votes Yet</div> : <div>{anecdotes[highestVote]} has {votes[highestVote]} votes</div>}  
    </>
  )
}

export default App
