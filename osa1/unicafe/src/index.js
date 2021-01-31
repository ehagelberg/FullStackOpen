import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}
      </button>
  )
}

const StatisticLine = ({text, value, percent}) => {

  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value} {percent}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  let all = good + neutral + bad;
  let avg = 0;
  let pos = 0;
  if(all !== 0){
    avg = (good - bad)/(good + neutral + bad);
    pos = good/(good + neutral + bad)*100;
  }
  else{
    return (
    <>
      <p>No feedback given</p>
    </>
    )
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} percent=""/>
        <StatisticLine text="neutral" value={neutral} percent=""/>
        <StatisticLine text="bad" value={bad} percent=""/>
        <StatisticLine text="all" value={all} percent=""/>
        <StatisticLine text="average" value={avg} percent=""/>
        <StatisticLine text="positive" value={pos} percent="%"/>
      </tbody>
    </table>
  )
}



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () =>{
    setGood(good + 1);
  } 

  const handleBadClick = () =>{
    setBad(bad + 1)
  } 

  const handleNeutralClick = () =>{
    setNeutral(neutral + 1)
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <h1>statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}

ReactDOM.render(<App />,
  document.getElementById('root')
);
