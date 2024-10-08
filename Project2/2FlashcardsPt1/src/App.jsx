import {useState} from 'react'
import Flashcard from './Flashcard'
import Form from './Form'
import './App.css'

const App = () => {
  const cardPairs = [
    { prompt: "A team of 4 enter storybooks to solve problems with their reading skills.",
      answer: "Super Why!",
      src: "./src/images/super_why.png",
      category: "PBS KIDS",
    },
    { prompt: "A team of 4 use their math and problem-solving skills to thwart a villain named Hacker in a digital universe.",
      answer: "Cyberchase",
      src: "./src/images/cyberchase.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A monkey lives with a man in a yellow hat.",
      answer: "Curious George",
      src: "./src/images/curious_george.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A cat with a striped hat leads 2 children on fantastical adventures.",
      answer: "Cat in the Hat",
      src: "./src/images/cat_in_the_hat.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A dog learns to talk after eating special alphabet soup.",
      answer: "Martha Speaks",
      src: "./src/images/martha.webp",
      category: "PBS KIDS",
    },
    { prompt: "This show highlights the life of a brother and sister duo from a Latino family.",
      answer: "Maya and Miguel",
      src: "./src/images/maya_and_miguel.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "2 brothers explore the animal kingdom through the lens of the animals themselves.",
      answer: "Wild Kratts",
      src: "./src/images/wild_kratts.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "An aardvark and his friends navigate childhood challenges and adventures.",
      answer: "Arthur",
      src: "./src/images/arthur.png",
      category: "PBS KIDS",
    },
    { prompt: "A dog hosts a game show featuring kids who compete in challenges in real life.",
      answer: "The Ruff Ruffman Show",
      src: "./src/images/ruff_ruffman.png",
      category: "PBS KIDS",
    },
    { prompt: "A kid with purple hair explores science at school.",
      answer: "Sid the Science Kid",
      src: "./src/images/sid.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A team of teenage agents use math and logic to figure why odd things are happening.",
      answer: "Odd Squad",
      src: "./src/images/odd_squad.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A superheroine fights crime while teaching her audience new words.",
      answer: "Word Girl",
      src: "./src/images/word_girl.jpeg",
      category: "PBS KIDS",
    },
    { prompt: "A young dinosaur travels through different eras and learns about various dinosaur species on a train.",
      answer: "Dinosaur Train",
      src: "./src/images/dino_t.webp",
      category: "PBS KIDS",
    },
    { prompt: "A grown-up dog whose owner is Emily Elizabeth.",
      answer: "Clifford the Big Red Dog",
      src: "./src/images/clifford.webp",
      category: "PBS KIDS",
    },
    { prompt: "A beloved comic character solves strange happenings in his small town with his friends.",
      answer: "Archie's Weird Mysteries",
      src: "./src/images/archie.jpeg",
      category: "QUBO",
    },
    { prompt: "A group of 5 young detectives goes on adventures to solve mysteries, inspired by a famous book series.",
      answer: "Famous 5 on the Case",
      src: "./src/images/famous5.jpeg",
      category: "QUBO",
    },
    { prompt: "A young girl runs her own detective agency and tackles school mysteries with her best friend.",
      answer: "Sally Bollywood",
      src: "./src/images/sally_bollywood.jpeg",
      category: "QUBO",
    },
    { prompt: "A cheerful fairy in charge of a magical park, she often finds herself in whimsical predicaments.",
      answer: "Pearlie",
      src: "./src/images/pearlie.jpeg",
      category: "QUBO",
    },
    { prompt: "A charming duo where one is a clever rabbit and the other is a good-natured but clumsy friend.",
      answer: "My Friend Rabbit",
      src: "./src/images/my_friend_rabbit.jpeg",
      category: "QUBO",
    },
    { prompt: "A small hedgehog uses his sharp wits and problem-solving skills to crack various mysteries in his neighborhood.",
      answer: "THe Mysteries of Alfred Hedgehog",
      src: "./src/images/alfred.jpeg",
      category: "QUBO",
    },
    { prompt: "A young girl who loves to tell stories and get into lighthearted adventures with her family and friends.", 
      answer: "Miss BG",
      src: "./src/images/miss_bg.webp",
      category: "QUBO",
    },
    { prompt: "7 modern teenagers who are descendants of Greek heroes must face mythological challenges in the present day.",
      answer: "Class of the Titans",
      src: "./src/images/class_of_the_titans.jpeg",
      category: "QUBO",
    },
  ]
  
  const numCards = cardPairs.length

  const [cardPair, setCardPair] = useState(cardPairs ? cardPairs[0] : undefined)
  const [cardPairIndex, setCardPairIndex] = useState(cardPairs ? 0 : -1)

  // Set sequence: Initialized to go through cards in order. Can be updated when cards are shuffled.
  const [cardSequence, setCardSequence] = useState(
    Array.from({length: numCards}, (_, i) => i)
  )

  const shuffleCards = () => {
    // Fisher-Yates Shuffle: Swap N cards at random indices for N times.
    let newCardSequence = [...cardSequence]
    for(let i=numCards-1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [newCardSequence[i], newCardSequence[j]] = [newCardSequence[j], newCardSequence[i]]
    }
    setCardSequence(newCardSequence)  // Update the state in altogether, not by element.
  }

  const nextCard = () => {
    if(cardPairIndex !== numCards-1){
      setCardPairIndex(cardPairIndex+1)
      const cardSequenceIndex = cardSequence[cardPairIndex]
      setCardPair(cardPairs[cardSequenceIndex])
    }
  }
  
  const prevCard = () => {
    if(cardPairIndex !== 0){
      setCardPairIndex(cardPairIndex-1)
      const cardSequenceIndex = cardSequence[cardPairIndex]
      setCardPair(cardPairs[cardSequenceIndex])
    }
  }

  return (
    <div>
      <div>
        <h1>Throwback to Childhood Days!</h1>
        <p className="info">How well do you remember your childhood shows? Guess the corresponding series from different channels!</p>
        <p className="info">Number of cards: {numCards}</p>
      </div>
      <Flashcard
        key={cardPairIndex}
        prompt={cardPair.prompt}
        answer={cardPair.answer}
        src={cardPair.src}
        category={cardPair.category}
      />
      <Form
        key={cardPairIndex+1}  // Children components must have different keys.
        answer={cardPair.answer}
      />
      <button className="prev" onClick={prevCard}>Previous</button>
      <button className="next" onClick={nextCard}>Next</button>
      <button className="shuffle" onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  )
}

export default App