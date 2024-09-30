import {useState} from 'react'
import Flashcard from './Flashcard'
import './App.css'

const App = () => {
  const cardPairs = {
    "A team of 4 enter storybooks to solve problems with their reading skills." : {
      answer: "Super Why!",
      src: "./src/images/super_why.png",
    },
    "A team of 4 use their math and problem-solving skills to thwart a villain named Hacker in a digital universe." : {
      answer: "Cyberchase",
      src: "./src/images/cyberchase.jpeg",
    },
    "A monkey lives with a man in a yellow hat." : {
      answer: "Curious George",
      src: "./src/images/curious_george.jpeg",
    },
    "A cat with a striped hat leads 2 children on fantastical adventures." : {
      answer: "Cat in the Hat",
      src: "./src/images/cat_in_the_hat.jpeg",
    },
    "A dog learns to talk after eating special alphabet soup." : {
      answer: "Martha Speaks",
      src: "./src/images/martha.webp",
    },
    "This show highlights the life of a brother and sister duo from a Latino family." : {
      answer: "Maya and Miguel",
      src: "./src/images/maya_and_miguel.jpeg",
    },
    "2 brothers explore the animal kingdom through the lens of the animals themselves." : {
      answer: "Wild Kratts",
      src: "./src/images/wild_kratts.jpeg",
    },
    "An aardvark and his friends navigate childhood challenges and adventures." : {
      answer: "Arthur",
      src: "./src/images/arthur.png",
    },
    "A dog hosts a game show featuring kids who compete in challenges in real life." : {
      answer: "The Ruff Ruffman Show",
      src: "./src/images/ruff_ruffman.png",
    },
    "A kid with purple hair explores science at school." : {
      answer: "Sid the Science Kid",
      src: "./src/images/sid.jpeg",
    },
    "A team of teenage agents use math and logic to figure why odd things are happening." : {
      answer: "Odd Squad",
      src: "./src/images/odd_squad.jpeg",
    },
    "A superheroine fights crime while teaching her audience new words." : {
      answer: "Word Girl",
      src: "./src/images/word_girl.jpeg",
    },
    "A young dinosaur travels through different eras and learns about various dinosaur species on a train." : {
      answer: "Dinosaur Train",
      src: "./src/images/dino_t.webp",
    },
    "A grown-up dog whose owner is Emily Elizabeth." : {
      answer: "Clifford the Big Red Dog",
      src: "./src/images/clifford.webp",
    },
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
        <h1>Throwback to Childhood Days!</h1>
        <p>How well do you remember your childhood shows? Guess the corresponding PBS KIDS series!</p>
        <p>Number of cards: {numCards}</p>
      </div>
      <Flashcard
        key={questionIndex}
        q={question}
        a={cardPairs[question].answer}
        src={cardPairs[question].src}
      />
      <button onClick={setNextQuestionAndIndex}>Next</button>
    </div>
  )
}

export default App
