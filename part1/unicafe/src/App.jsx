import {useState} from 'react'
import Feedback from './Feedback'
import Statistics from './Statistics'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const states = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive
  }

  const buttons = {
    good: () => {
      const newGood = good + 1
      const newAll = all + 1
      const newAverage = (newGood - bad)/newAll
      const newPositive = (newGood/newAll)*100
      setGood(newGood)
      setAll(newAll)
      setAverage(newAverage)
      setPositive(newPositive)
    },
    neutral: () => {
      const newNeutral = neutral + 1
      const newAll = all + 1
      const newAverage = (good - bad)/newAll
      const newPositive = (good/newAll)*100
      setNeutral(newNeutral)
      setAll(newAll)
      setAverage(newAverage)
      setPositive(newPositive)
    },
    bad: () => {
      const newBad = bad + 1
      const newAll = all + 1
      const newAverage = (good - newBad)/newAll
      const newPositive = (good/newAll)*100
      setBad(newBad)
      setAll(newAll)
      setAverage(newAverage)
      setPositive(newPositive)
    }
  }


  return (
    <div>
      <Feedback {...buttons}/>
      <Statistics {...states}/>
    </div>
  )
}

export default App
