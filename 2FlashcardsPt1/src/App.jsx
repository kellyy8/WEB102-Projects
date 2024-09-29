import {useState} from 'react'
import Flashcard from './Flashcard'
import './App.css'

const App = () => {
  const cardPairs = {  // TODO: Update sample card pairs.
    "A" : "a",
    "B" : "b",
    "C" : "c",
    "D" : "d",
    "E" : "e",
  }
  
  const [question, setQuestion] = useState("A")
  const allQuestions = Object.keys(cardPairs)
  const numCards = allQuestions.length

  const setNextQuestion = () => {  // TODO: Make sure that next card shows question first, even if prev card last showed its answer.
    const index = Math.floor(Math.random() * numCards)  // Expected output: 0, ..., numPairs-1
    setQuestion(allQuestions[index])
  }

  return (
    <div>
      <div className="intro">
        <h1>Flashcards</h1>
        <p>Description...</p>
        <p>Number of cards: {numCards}</p>
      </div>
      <Flashcard q={question} a={cardPairs[question]}/>
      <button onClick={setNextQuestion}>Next</button>
    </div>
  )
}

export default App
