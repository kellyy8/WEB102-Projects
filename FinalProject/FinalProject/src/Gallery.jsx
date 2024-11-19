import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import './Gallery.css'

const Gallery = () => {
    const [posts, setPosts] = useState([
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
        {title: 'Title', timestamp: '11:11PM', upvotes: 1},
    ])

    useEffect(() => {
        // TODO: Fetch posts from database.
    }, [])

    return(
        <div>
            <h1>Gallery</h1>
            <div className="postsContainer">
                {posts && posts.map((post) =>
                    <PostCard title={post.title} timestamp={post.timestamp} upvotes={post.upvotes}/>
                )}
            </div>
        </div>
    )
}

export default Gallery