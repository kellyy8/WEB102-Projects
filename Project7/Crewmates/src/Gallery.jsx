import React, {useState, useEffect} from 'react'
import {supabase} from './client.js'
import ProfileCard from './components/ProfileCard'
import './Gallery.css'

const Gallery = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => { // TODO
        const fetchTeammates = async () => {
            const {data} = await supabase.from('Teammates').select().order('created_at', {ascending: true})
            setProfiles(data)
        }
        
        fetchTeammates()
    }, [])

    return (
        <div>
            <h1>Gallery</h1>
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