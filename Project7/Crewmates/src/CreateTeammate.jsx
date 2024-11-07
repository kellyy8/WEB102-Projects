import React, {useState} from 'react'
import { supabase } from './client.js'
import './CreateTeammate.css'

const CreateTeammate = () => {
    const [teammateName, setTeammateName] = useState("")
    const [favColors, setFavColors] = useState([])

    const handleNameChange = (event) => {
        setTeammateName(event.target.value)
    }

    // TODO: Track what colors are selected/deselected.
    const handleColorChange = (event) => {
        const {value, checked} = event.target

        // Update selected colors based on whether the checkbox is checked or not
        setFavColors((prevSelectedColors) => {
            if (checked) {
                // Add color to the list if checked
                return [...prevSelectedColors, value]
            } else {
                // Remove color from the list if unchecked
                return prevSelectedColors.filter((color) => color !== value)
            }
        })
    }

    // Create a new teammate.
    const create = async (event) => {
        event.preventDefault()

        await supabase
            .from('Teammates')
            .insert({name: teammateName, attributes: favColors})
            .select()

        window.location = "/"
    }

    return(
        <div>
            <h1>Fill out the information below to create a new teammate!</h1>
            <form className="teammateFormContainer">
                <label for="name">
                    <span style={{fontSize: "18px", fontWeight: "bolder"}}>Name: </span>
                    <input type="text" id="name" name="name" onChange={handleNameChange}/>  {/** "name" maps to db column. */}
                    <br/>
                </label>
                <br/>

                <h3>Favorite Color:</h3>
                <div class="colorPicker">  {/** "value" attribute is stored in the db */}
                    <label><input type="checkbox" id="red" value="Red" onChange={handleColorChange}/>Red</label>
                    <label><input type="checkbox" id="orange" value="Orange" onChange={handleColorChange}/>Orange</label>
                    <label><input type="checkbox" id="yellow" value="Yellow" onChange={handleColorChange}/><span>Yellow</span></label>
                    <label><input type="checkbox" id="green" value="Green" onChange={handleColorChange}/><span>Green</span></label>
                    <label><input type="checkbox" id="blue" value="Blue" onChange={handleColorChange}/><span>Blue</span></label>
                    <label><input type="checkbox" id="purple" value="Purple" onChange={handleColorChange}/><span>Purple</span></label>
                    <label><input type="checkbox" id="pink" value="Pink" onChange={handleColorChange}/><span>Pink</span></label>
                </div>
                <br/>

                <input type="submit" value="Create teammate!" onClick={create}/>
            </form>
        </div>
    )
}

export default CreateTeammate