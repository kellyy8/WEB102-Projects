import React, {useState, useEffect} from 'react'
import {supabase} from './client.js'
import {useParams} from 'react-router-dom'

const ProfilePage = () => {
    const {symbol} = useParams()

    const id_index = symbol.indexOf('_')
    const [id, setId] = useState(symbol.slice(id_index+1, symbol.length))
    const [name, setName] = useState(symbol.slice(0, id_index))
    const [colors, setColors] = useState([])

    useEffect(() => {
        const fetchTeammateDetails = async () => {
            // const {details} = await supabase.from('Teammates').select().eq('name', name).maybeSingle()
            const {data} = await supabase.from('Teammates').select()

            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    setColors(data[i].favorite_colors)
                    break
                }
            }
        }
    
        fetchTeammateDetails()
    }, [symbol])

    return(
        <div>
            <h1>Name: {name}</h1>

            <h2>Favorite Colors: </h2>
            {colors && colors.length > 0 ?
                <ul>
                    {colors.map((color) => <li key={color}>{color}</li>)}
                </ul>
                :
                <p> No favorite colors yet! </p>
            }
        </div>
    )
}

export default ProfilePage