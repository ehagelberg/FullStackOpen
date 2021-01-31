import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return(
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = (props) => {

  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5: 0});
  const [selected, setSelected] = useState(0);
  const [most, setMost] = useState(0);

  const nextAnec = () => {
    const rand = Math.floor(Math.random() * Math.floor(5));
    
    setSelected(rand);
  }

  const vote = () => {
    const copy = {...votes};
    copy[selected] += 1;
    setVotes(copy);

    if(copy[most] < copy[selected]){
      setMost(selected);
    }

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={vote} text="vote" />
      <Button onClick={nextAnec} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[most]}</p>
      <p>has {votes[most]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
