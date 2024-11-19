import React, { useEffect, useState } from 'react'
import { Link }from 'react-router-dom'
import { supabase } from './client.js'
import PostCard from './PostCard'
import './Gallery.css'

const Gallery = () => {
    const [posts, setPosts] = useState([])

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
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <PostCard title={post.title} timestamp={timestamp} upvotes={post.upvotes}/>
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Gallery