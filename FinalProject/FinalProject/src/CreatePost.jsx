import React, { useState, useEffect } from 'react'
import { supabase } from './client.js'
import './CreatePost.css'
import { useParams } from 'react-router-dom'

const CreatePost = ({isUpdate}) => {
    // Retrieve post id from URL params and convert it to a number to match database's id type.
    const param = useParams().id
    const [id, setId] = useState(isUpdate ? Number(param) : '')

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageURL, setImageURL] = useState('')
    
    const [error, setError] = useState(false)

    useEffect(() => {
        // For udpates, fetch post data from database to populate the inputs with existing data.
        const fetchPost = async () => {
            const {data, error} = await supabase.from('Posts').select().eq('id', id).maybeSingle()
            if (error) {
                console.error("Error fetching post: ", error)
            }
            else {
                setTitle(data.title)
                setContent(data.content)
                setImageURL(data.imageURL)
            }
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
            const {data, error} = await supabase.from('Posts').insert({title: title, content: content, imageURL: imageURL}).select()
            if (error) {
                console.error("Error adding post: ", error)
            }
            else {
                window.location = `/post/${data[0].id}`
            }
        }
        else {
            // Update post data in database. Redirect back to post page after.
            const {data, error} = await supabase.from('Posts').update({title: title, content: content, imageURL: imageURL}).eq('id', id).select()
            if (error) {
                console.error("Error updating post: ", error)
            }
            else {
                setId(data[0].id)
                window.location = `/post/${id}`
            }
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