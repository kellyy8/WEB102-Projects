import React, { useState, useEffect } from 'react'
import { supabase } from './client.js'
import './CreatePost.css'

const CreatePost = ({isUpdate}) => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageURL, setImageURL] = useState('')
    
    const [error, setError] = useState(false)

    useEffect(() => {
        // Fetch post data from database.
        const fetchPost = async () => {
            const {data} = await supabase.from('Posts').select().eq('id', id).maybeSingle()

            // TODO: Populate the form with the existing post data.
            setTitle(data.title)
            setContent(data.content)
            setImageURL(data.imageURL)
        }
        
        if (isUpdate) {
            fetchPost()
        }
    }, [])
    

    const handleTextChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        if (id === 'title') {
            if(value === ''){
                setError(true)
            }
            setTitle(value)
        }
        else if (id === 'content') {
            setContent(value)
        }
        else if (id === 'imageURL') {
            setImageURL(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Title is a required field. Make sure it is not empty.
        if(title === ''){
            setError(true)
            return
        }

        if (!isUpdate) {
            // Add new post data to database. Redirect to gallery page after.
            const {_, error} = await supabase.from('Posts').insert({title: title, content: content, imageURL: imageURL}).select()
            if (error) {
                console.error("Error adding post: ", error)
            }
            window.location = "/gallery"
        }
        else {
            // TODO: Test out the update functionality.
            // Update post data in database. Redirect back to post page after.
            const {data, error} = await supabase.from('Posts').update({title: title, content: content, imageURL: imageURL}).eq('id', id).select()
            if (error) {
                console.error("Error updating post: ", error)
            }
            else {
                setId(data[0].id)
            }
            window.location = `/post/${id}`
        }
    }

    return (
        <div className="createPostWrapper">
            {isUpdate ? <h1>Update Post</h1> : <h1>Create Post</h1>}

            <form id="postForm" onSubmit={handleSubmit}>
                <label htmlFor="title">Title<span style={{color: "#c33939"}}>*</span></label>
                <input id="title" type="text" value={title} onChange={handleTextChange}/>
                {error && <span style={{ color: "#c33939", fontSize: "18px" }}>Title cannot be empty.</span>}
                
                <label htmlFor="content">Content</label>
                <textarea id="content" value={content} onChange={handleTextChange}/>

                <label htmlFor="imageURL">Image URL</label>
                <input id="imageURL" type="text" value={imageURL} onChange={handleTextChange}/>

                <br/>
                <button id="submitPost" type="submit">
                    {isUpdate ? 'Update Post' : 'Create Post'}
                </button>
            </form>

        </div>
    )
}

export default CreatePost