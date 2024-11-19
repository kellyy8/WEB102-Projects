import React, { useEffect, useState } from 'react'
import { supabase } from './client.js'
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
        // Fetch posts from database.
        const fetchPosts = async () => {
            const {data} = await supabase.from('Posts').select().order('created_at', {ascending: true})
            setPosts(data)
        }

        fetchPosts()

    }, [])

    return(
        <div>
            <h1>Gallery</h1>
            <div className="postsContainer">
                {posts && posts.map((post) =>{
                    const timestamp = new Date(post.created_at).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      });
                    
                    return(
                        <PostCard title={post.title} timestamp={timestamp} upvotes={post.upvotes}/>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Gallery