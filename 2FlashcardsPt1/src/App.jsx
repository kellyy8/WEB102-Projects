import {useState} from 'react'
import Flashcard from './Flashcard'
import './App.css'

const App = () => {
  const cardPairs = {
    "A team of 4 enter storybooks to solve problems with their reading skills." : "Super Why!",
    "A team of 4 use their math and problem-solving skills to thwart a villain named Hacker in a digital universe." : "Cyberchase",
    "A monkey lives with a man in a yellow hat." : "Curious George",
    "A cat with a striped hat leads 2 children on fantastical adventures." : "Cat in the Hat",
    "A dog learns to talk after eating special alphabet soup." : "Martha Speaks",
    "This show highlights the life of a brother and sister duo from a Latino family." : "Maya and Miguel",
    "2 brothers explore the animal kingdom through the lens of the animals themselves." : "Wild Kratts",
    "An aardvark and his friends navigate childhood challenges and adventures." : "Arthur",
    "A dog hosts a game show featuring kids who compete in challenges in real life." : "The Ruff Ruffman Show",
    "A kid with purple hair explores science at school." : "Sid the Science Kid",
    "A team of teenage agents use math and logic to figure why odd things are happening." : "Odd Squad",
    "A superheroine fights crime while teaching her audience new words." : "Word Girl",
    "A young dinosaur travels through different eras and learns about various dinosaur species on a train." : "Dinosaur Train",
    "A grown-up dog whose owner is Emily Elizabeth." : "Clifford the Big Red Dog",
  }
  
  const allQuestions = Object.keys(cardPairs)
  const numCards = allQuestions.length

  const [question, setQuestion] = useState(allQuestions[0])
  const [questionIndex, setQuestionIndex] = useState(0)

  const setNextQuestionAndIndex = () => {
    setQuestionIndex(Math.floor(Math.random() * numCards))  // Expected output: 0, ..., numPairs-1
    setQuestion(allQuestions[questionIndex])
  }

  return (
    <div>
      <div>
        <h1>Guess That PBS KIDS Show!</h1>
        <p>Use the hint on each card to guess the corresponding PBS KIDS show.</p>
        <p>Number of cards: {numCards}</p>
      </div>
      <Flashcard key={questionIndex} q={question} a={cardPairs[question]}/>
      <button onClick={setNextQuestionAndIndex}>Next</button>
    </div>
  )
}

export default App
