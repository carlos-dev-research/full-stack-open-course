import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)

  const nextAnecdote = () =>{
    const newI = getRandomInt(0, anecdotes.length)
    setSelected(newI)
  }
  const voteAnecdote = () => {
    let newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    // Find most voted
    let iMax = 0
    let max = newVotes[0]
    for (let i = 1; i < newVotes.length; i++){
      if (newVotes[i]>max){
        max = newVotes[i]
        iMax = i
      }
    }
    setVotes(newVotes)
    setMostVoted(iMax)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


export default App