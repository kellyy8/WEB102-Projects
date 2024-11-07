import React, {useEffect, useState} from 'react'
import {supabase} from './client.js'
import {useParams} from 'react-router-dom'
import './CreateTeammate.css'

const UpdateTeammate = () => {
    const {symbol} = useParams()

    const id_index = symbol.indexOf('_')
    const [id, setId] = useState(symbol.slice(id_index+1, symbol.length))
    const [name, setName] = useState(symbol.slice(0, id_index))
    const [favColors, setFavColors] = useState([])
    const [currFavColors, setCurrFavColors] = useState(["Red"])

    const handleNameChange = (event) => {
        setName(event.target.value)
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

    useEffect(() => {
        const fetchTeammate = async () => {
            const {data} = await supabase.from('Teammates').select()

            for (let i = 0; i < data.length; i++) {
                if (data[i].id === id) {
                    setName(data[i].name)
                    setCurrFavColors(data[i].favorite_colors)
                    break
                }
            }
        }

        fetchTeammate()
    }, [symbol])

    // Update teammate.
    const update = async (event) => {
        event.preventDefault()

        const {data} = await supabase.from('Teammates').select()

        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                await supabase
                    .from('Teammates')
                    .update({name: name, favorite_colors: favColors})
                    .eq('name', name)
                break
            }
        }

        window.location.href = '/gallery'
    }

    return(
        <div>
            <h1>Update teammate {name}'s information!</h1>
            <form className="teammateFormContainer">
                <label htmlFor="name">
                    <span style={{fontSize: "18px", fontWeight: "bolder"}}>Name: </span>
                    <input type="text" id="name" name="name" onChange={handleNameChange} placeholder={name}/>  {/** "name" maps to db column */}
                    <br/>
                </label>
                <br/>

                <h3>Favorite Color:</h3>
                {currFavColors.length > 0 ?
                    <p> Teammate {name} currently likes the colors: 
                        {currFavColors.map((color) => <span> {color} </span>)}
                    </p>
                    :
                    <p> Teammate {name} has no favorite colors yet! </p>
                }

                <div className="colorPicker">  {/** "value" attribute is stored in the db */}
                    <label><input type="checkbox" id="red" value="Red" onChange={handleColorChange}/>Red</label>
                    <label><input type="checkbox" id="orange" value="Orange" onChange={handleColorChange}/>Orange</label>
                    <label><input type="checkbox" id="yellow" value="Yellow" onChange={handleColorChange}/><span>Yellow</span></label>
                    <label><input type="checkbox" id="green" value="Green" onChange={handleColorChange}/><span>Green</span></label>
                    <label><input type="checkbox" id="blue" value="Blue" onChange={handleColorChange}/><span>Blue</span></label>
                    <label><input type="checkbox" id="purple" value="Purple" onChange={handleColorChange}/><span>Purple</span></label>
                    <label><input type="checkbox" id="pink" value="Pink" onChange={handleColorChange}/><span>Pink</span></label>
                </div>
                <br/>

                <input type="submit" value="Update teammate!" onClick={update}/>
            </form>
        </div>
    )
}

export default UpdateTeammate