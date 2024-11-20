import React, { useEffect, useState } from 'react'
import { Link }from 'react-router-dom'
import { supabase } from './client.js'
import PostCard from './PostCard'
import './Gallery.css'

const Gallery = () => {
    const [allPosts, setAllPosts] = useState([])            // Holds all posts from the database (i.e. unfiltered posts).
    const [posts, setPosts] = useState([])                  // May be sorted or filtered. Used for displaying posts.

    const [search, setSearch] = useState('')

    useEffect(() => {
        // Fetch posts from database.
        const fetchPosts = async () => {
            const {data} = await supabase.from('Posts').select().order('created_at', {ascending: true})
            setAllPosts(data)
            setPosts(data)
        }

        fetchPosts()

    }, [])

    const handleSearchByTitle = () => {
        if(search === ''){
            setPosts(allPosts)
        }
        else{
            // Always search through all posts, not just the current posts.
            const filteredPosts = allPosts.filter((post) => {
                return post.title.toLowerCase().includes(search.toLowerCase())
            })
            setPosts(filteredPosts)
        }
    }

    const handleSortByNewest = () => {
        const sortedPosts = [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setPosts(sortedPosts)
    }

    const handleSortByMostPopular = () => {
        const sortedPosts = [...posts].sort((a, b) => {
            if (b.upvotes === a.upvotes) {
                // Tie-breaker: newest post first
                return new Date(b.timestamp) - new Date(a.timestamp)
            }
            return b.upvotes - a.upvotes
        })
        setPosts(sortedPosts)
    }

    return(
        <div>
            <h1>Gallery</h1>

            <div className="searchBar">
                <input
                    type="text"
                    value={search}
                    placeholder="Search for posts..."
                    onChange={(e)=>{setSearch(e.target.value)}}
                    alt="The search words in the search bar."
                />
                <button onClick={handleSearchByTitle}>Search</button>
            </div>

            <div className="filters">
                <p> Order by: </p>
                <button onClick={handleSortByNewest}>
                    Newest
                </button>
                <button onClick={handleSortByMostPopular}>
                    Most Popular
                </button>
            </div>

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