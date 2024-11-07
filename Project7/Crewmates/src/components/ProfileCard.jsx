import React from 'react'
import {supabase} from '../client.js'
import {Link} from 'react-router-dom'
import './ProfileCard.css'

const ProfileCard = ({id, name, colors}) => {
    const deleteProfile = () => {
        supabase
            .from('Teammates')
            .delete()
            .eq('id', id)
            .then(() => {
                window.location.reload()
            })
            .catch((error) => {
                console.error(`Error deleting profile with id ${id}: ${error.message}`)
            })
    }

    return (
        <div className="profileCard">
            <h2>Name: </h2>
            <p>{name}</p>

            <h2>Favorite Colors: </h2>
            {colors && colors.length > 0 ?
                <ul>
                    {colors.map((color) => <li key={color}>{color}</li>)}
                </ul>
                :
                <p> No favorite colors yet! </p>
            }
            
            <div className="CRUDProfileLinks">
                <button>
                    <Link
                        style={{color: "white"}}
                        to={`/teammateDetails/${name}_${id}`}
                        key={`teammateDetails_${name}_${id}`}
                        >
                            View Profile
                    </Link>
                </button>
                <button>
                    <Link
                        style={{color: "white"}}
                        to={`/update/${name}_${id}`}
                        key={`update_${name}_${id}`}>
                            Update
                    </Link>
                </button>
                <button onClick={deleteProfile}>Delete</button>
            </div>
        </div>
    )
}

export default ProfileCard