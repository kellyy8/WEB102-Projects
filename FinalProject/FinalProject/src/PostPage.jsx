import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './client.js'
import like from './images/like.png'
import './PostPage.css'

const PostPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        // Fetch post from database.
        const fetchPost = async () => {
            const {data} = await supabase.from('Posts').select().eq('id', id).maybeSingle()
            data.created_at = new Date(data.created_at).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
            setPost(data)
        }

        fetchPost()
    }, [id])

    return (
        <div className="postPageContainer">
            <p id="timestamp">Posted on {post.created_at}</p>

            <h1 id="title">{post.title}</h1>
            <p id="content">{post.content}</p>
            <img src={post.imageURL} height="200px" alt="Image of craft."/>

            <div id="upvotes">
                <img src={like} alt="Like" height="20px" width="20px"/> 
                <p>{post.upvotes}</p>
            </div>

            <div id="comments">
                <h2>Comments</h2>
                {post && post.comments ?
                    <p> Comments </p>            /** TODO: Populate with comments from database. */
                    :
                    <p>No comments yet!</p>
                }
            </div>
        </div>
    )
}

export default PostPage