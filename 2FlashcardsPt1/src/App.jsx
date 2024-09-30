import {useState} from 'react'
import Flashcard from './Flashcard'
import './App.css'

const App = () => {
  const cardPairs = {
    "A team of 4 enter storybooks to solve problems with their reading skills." : {
      answer: "Super Why!",
      src: "./src/images/super_why.png",
      category: "PBS KIDS",
    },
    "A team of 4 use their math and problem-solving skills to thwart a villain named Hacker in a digital universe." : {
      answer: "Cyberchase",
      src: "./src/images/cyberchase.jpeg",
      category: "PBS KIDS",
    },
    "A monkey lives with a man in a yellow hat." : {
      answer: "Curious George",
      src: "./src/images/curious_george.jpeg",
      category: "PBS KIDS",
    },
    "A cat with a striped hat leads 2 children on fantastical adventures." : {
      answer: "Cat in the Hat",
      src: "./src/images/cat_in_the_hat.jpeg",
      category: "PBS KIDS",
    },
    "A dog learns to talk after eating special alphabet soup." : {
      answer: "Martha Speaks",
      src: "./src/images/martha.webp",
      category: "PBS KIDS",
    },
    "This show highlights the life of a brother and sister duo from a Latino family." : {
      answer: "Maya and Miguel",
      src: "./src/images/maya_and_miguel.jpeg",
      category: "PBS KIDS",
    },
    "2 brothers explore the animal kingdom through the lens of the animals themselves." : {
      answer: "Wild Kratts",
      src: "./src/images/wild_kratts.jpeg",
      category: "PBS KIDS",
    },
    "An aardvark and his friends navigate childhood challenges and adventures." : {
      answer: "Arthur",
      src: "./src/images/arthur.png",
      category: "PBS KIDS",
    },
    "A dog hosts a game show featuring kids who compete in challenges in real life." : {
      answer: "The Ruff Ruffman Show",
      src: "./src/images/ruff_ruffman.png",
      category: "PBS KIDS",
    },
    "A kid with purple hair explores science at school." : {
      answer: "Sid the Science Kid",
      src: "./src/images/sid.jpeg",
      category: "PBS KIDS",
    },
    "A team of teenage agents use math and logic to figure why odd things are happening." : {
      answer: "Odd Squad",
      src: "./src/images/odd_squad.jpeg",
      category: "PBS KIDS",
    },
    "A superheroine fights crime while teaching her audience new words." : {
      answer: "Word Girl",
      src: "./src/images/word_girl.jpeg",
      category: "PBS KIDS",
    },
    "A young dinosaur travels through different eras and learns about various dinosaur species on a train." : {
      answer: "Dinosaur Train",
      src: "./src/images/dino_t.webp",
      category: "PBS KIDS",
    },
    "A grown-up dog whose owner is Emily Elizabeth." : {
      answer: "Clifford the Big Red Dog",
      src: "./src/images/clifford.webp",
      category: "PBS KIDS",
    },
    "A beloved comic character solves strange happenings in his small town with his friends." : {
      answer: "Archie's Weird Mysteries",
      src: "./src/images/archie.jpeg",
      category: "QUBO",
    },
    "A group of 5 young detectives goes on adventures to solve mysteries, inspired by a famous book series." : {
      answer: "Famous 5 on the Case",
      src: "./src/images/famous5.jpeg",
      category: "QUBO",
    },
    "A young girl runs her own detective agency and tackles school mysteries with her best friend." : {
      answer: "Sally Bollywood",
      src: "./src/images/sally_bollywood.jpeg",
      category: "QUBO",
    },
    "A cheerful fairy in charge of a magical park, she often finds herself in whimsical predicaments." : {
      answer: "Pearlie",
      src: "./src/images/pearlie.jpeg",
      category: "QUBO",
    },
    "A charming duo where one is a clever rabbit and the other is a good-natured but clumsy friend." : {
      answer: "My Friend Rabbit",
      src: "./src/images/my_friend_rabbit.jpeg",
      category: "QUBO",
    },
    "A small hedgehog uses his sharp wits and problem-solving skills to crack various mysteries in his neighborhood." : {
      answer: "THe Mysteries of Alfred Hedgehog",
      src: "./src/images/alfred.jpeg",
      category: "QUBO",
    },
    "A young girl who loves to tell stories and get into lighthearted adventures with her family and friends." : {
      answer: "Miss BG",
      src: "./src/images/miss_bg.webp",
      category: "QUBO",
    },
    "7 modern teenagers who are descendants of Greek heroes must face mythological challenges in the present day." : {
      answer: "Class of the Titans",
      src: "./src/images/class_of_the_titans.jpeg",
      category: "QUBO",
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
        category={cardPairs[question].category}
      />
      <button className="next" onClick={setNextQuestionAndIndex}>Next</button>
    </div>
  )
}

export default App
