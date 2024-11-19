import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './client.js'
import like from './images/like.png'
import edit from './images/edit.png'
import remove from './images/remove.png'
import CommentsSection from './CommentsSection'
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

    useEffect(() => {
        // Add comments to database. State variable post.comments is updated via lifting state up using CommentsSection.
        const addComments = async () => {
            const {_, error} = await supabase.from('Posts').update({comments: post.comments}).eq('id', id)
            if (error) {
                console.error("Error adding comments: ", error)
            }
        }

        addComments()
    }, [post.comments])

    const incrementUpvotes = async () => {
        // Update upvotes in database.
        const {_, error} = await supabase.from('Posts').update({upvotes: post.upvotes + 1}).eq('id', id)

        // If successful, update the upvotes in the state.
        if (error) {
            console.error("Error updating upvotes: ", error)
        } else {
            setPost({...post, upvotes: post.upvotes + 1})
        }
    }

    const deletePost = async () => {
        // Delete post from database.
        const {_, error} = await supabase.from('Posts').delete().eq('id', id)

        // If successful, redirect to the gallery page.
        if (error) {
            console.error("Error deleting post: ", error)
        } else {
            window.location.href = '/gallery'
        }
    }

    const editPost = () => {
        // Redirect to the edit post page.
        window.location.href = `/edit/${id}`
    }
        
    return (
        <div className="postPageContainer">
            <p id="timestamp">Posted on {post.created_at}</p>

            <h1 id="title">{post.title}</h1>
            <p id="content">{post.content}</p>
            <img src={post.imageURL} width="400px" alt="Image of craft."/>

            <div className="icons">
                <div id="upvotes">
                    <img src={like} alt="Like" height="30px" width="30px" onClick={incrementUpvotes}/> 
                    <p>{post.upvotes}</p>
                </div>
                <div className="crud">
                    <img src={edit} alt="Like" height="30px" width="30px" onClick={editPost}/>
                    <img src={remove} alt="Like" height="30px" width="30px" onClick={deletePost}/>
                </div>
            </div>

            {/** Lift up state: comments children to post parent. */}
            <CommentsSection comments={post.comments} post={post} setPost={setPost}/>
        </div>
    )
}

export default PostPage