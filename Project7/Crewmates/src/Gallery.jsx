import React from 'react'
import './Gallery.css'

const Profile = () => {
    return (
        <div className="profile">
            <h1>"Name"</h1>
            <h2>Attributes: </h2>
            {/* * Paragraph element for every attribute in the list. */}
            {/** View profile button. */}
            {/** Update button. */}
            {/** Delete button. */}
        </div>
    )
    
}

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <div className="galleryContainer">
                <Profile/>
                <Profile/>
                {/* * A list of all the crewmates in the gallery. */}
                {/* * Each crewmate should be a link to their profile page. */}
            </div>
        </div>
    )
}

export default Gallery