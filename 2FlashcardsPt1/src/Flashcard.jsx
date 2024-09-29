import {useState} from 'react'
import './Flashcard.css'

const Flashcard = (props) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const flipCard = () => {
        /** TODO: Animate the card to flip 180º. */
        setShowAnswer(!showAnswer)
    }

    return(
        <div className="wrapper" onClick={flipCard}>
            <p className="content">{showAnswer ? props.a : props.q}</p>
        </div>
    )
}

export default Flashcard