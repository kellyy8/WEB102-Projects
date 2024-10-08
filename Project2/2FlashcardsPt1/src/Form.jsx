import {useState} from 'react'
import './Form.css'

const Form = ({answer}) => {
    const [guess, setGuess] = useState("")
    const [status, setStatus] = useState("neutral")  // Statuses: Neutral (no answer submitted yet), Correct, Incorrect

    const onChange = (e) => {
        setGuess(e.target.value)
        setStatus("neutral")
    }

    const onSubmit = () => {
        if(guess === answer){
            setStatus("correct")
        }
        else{
            setStatus("incorrect")
        }
    }

    return(
        <div className="formContainer">
            <form>
                <label className="inputLabel">
                    Enter your guess here:  
                    <input
                        type="text"
                        id="guess"
                        className={status}
                        onChange={onChange}
                    />
                </label>
            </form>
            <button type="submit" className="submit" onClick={onSubmit}>Check Answer</button>
        </div>
    )
}

export default Form