import {useState} from 'react'
import Flashcard from './Flashcard'
import './App.css'

const App = () => {
  const cardPairs = {  // TODO: Update sample card pairs.
    "A" : "a",
    "B" : "b",
  }
  
  const [question, setQuestion] = useState("B")

  return (
    <div>
      <div className="intro">
        <h1>Flashcards</h1>
        <p>Description...</p>
        <p>Number of cards: {/** TODO */}</p>
      </div>
      <Flashcard q={question} a={cardPairs[question]}/>
      <button onClick={()=>{/** TODO */}}>Next card</button>
    </div>
  )
}

export default App
