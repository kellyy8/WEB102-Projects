import React from 'react'
import './ProfileCard.css'

const ProfileCard = ({id, name, colors}) => {
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
            
            {/** View profile button. */}
            {/** Update button. */}
            {/** Delete button. */}
        </div>
    )
}

export default ProfileCard