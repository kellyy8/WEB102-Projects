import {useState} from 'react'
import './Flashcard.css'

const Flashcard = (props) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const flipCard = () => {
        /** TODO: Animate the card to flip 180º. */
        setShowAnswer(!showAnswer)
    }

    return(
        <div className="cardWrapper" onClick={flipCard}>
            <p className="content">{showAnswer ? props.a : props.q}</p>
            {showAnswer &&
                <div className="imgWrapper">
                    <img src={props.src} height="100%" min-width="100%"/>
                </div>
            }
        </div>
    )
}

export default Flashcard