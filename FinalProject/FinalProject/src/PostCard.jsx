import React from 'react';
import './PostCard.css';

const PostCard = ({title, timestamp, upvotes}) => {
    return (
        <div className="postCardContainer">
            <h1>{title}</h1>
            <p>{timestamp}</p>
            <p>{upvotes}</p>
        </div>
    )
}

export default PostCard;