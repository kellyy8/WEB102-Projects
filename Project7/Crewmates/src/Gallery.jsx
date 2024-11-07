import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
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
                        <Link
                        style={{color: "white"}}
                        to={`/teammateDetails/${profile.name}_${profile.id}`}
                        key={`${profile.name}_${profile.id}`}
                        >
                            <ProfileCard id={profile.id} name={profile.name} colors={profile.favorite_colors}/>
                        </Link>
                    )
                    :
                    <h2>No teammates yet!</h2>
                }
            </div>  
        </div>
    )
}

export default Gallery