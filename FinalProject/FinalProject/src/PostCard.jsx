import React from 'react'
import './PostCard.css'

const PostCard = ({title, timestamp, upvotes}) => {
    return (
        <div className="postCardContainer">
            <h1>{title}</h1>
            <p>Posted on {timestamp}</p>
            <p>{upvotes} upvotes!</p>
        </div>
    )
}

export default PostCard