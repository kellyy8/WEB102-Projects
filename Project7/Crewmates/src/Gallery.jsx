import React, {useState, useEffect} from 'react'
import {supabase} from './client.js'
import ProfileCard from './components/ProfileCard'
import './Gallery.css'

const Gallery = () => {
    const [profiles, setProfiles] = useState([])
    const [colorCounts, setColorCounts] = useState({})

    useEffect(() => { // TODO
        const fetchTeamData = async () => {
            const {data} = await supabase.from('Teammates').select().order('created_at', {ascending: true})
            setProfiles(data)

            const colorCounts = {}
            data.forEach((profile) => {
                profile.favorite_colors.forEach((color) => {
                    if (colorCounts[color]) {
                        colorCounts[color]++
                    } else {
                        colorCounts[color] = 1
                    }
                })
            })
            setColorCounts(colorCounts)
        }
        
        fetchTeamData()
    }, [])

    return (
        <div>
            <h1>Gallery</h1>
            <h2> Stats:</h2>
            <p> Currently, we have a total of {profiles.length} teammates!</p>
            {profiles && profiles.length > 0 ? 
                <div>
                    <p>Here's the like count for each color with at least 1 like!</p>
                    {Object.entries(colorCounts).map(([color, count], index) => 
                        <p key={index}>{color}: {count}</p>
                    )}
                </div>
                :
                <></>
            }
            <div className="galleryContainer">
                {
                    profiles && profiles.length > 0 ?
                    profiles.map((profile) => 
                        <ProfileCard id={profile.id} name={profile.name} colors={profile.favorite_colors}/>
                    )
                    :
                    <h2>No teammates yet!</h2>
                }
            </div>  
        </div>
    )
}

export default Gallery