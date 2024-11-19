import React from 'react'
import './PostCard.css'

const PostCard = ({title, timestamp, upvotes}) => {
    return (
        <div className="postCardContainer">
            <h1>{title}</h1>
            <p>Posted on {timestamp}</p>
            
            <div className="upvotes">
                <img src="./src/images/like.png" alt="Like" height="25px"/> 
                <p>{upvotes}</p>
            </div>
        </div>
    )
}

export default PostCard