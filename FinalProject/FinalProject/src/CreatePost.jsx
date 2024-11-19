import React, { useState } from 'react'
import './CreatePost.css'

const CreatePost = () => {
    const [isUpdate, setIsUpdate] = useState(false)  // TODO: Change to true if updating a post.
    const [error, setError] = useState(false)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageURL, setImageURL] = useState('')

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

    const handleSubmit = (e) => {
        e.preventDefault()

        // Title is a required field. Make sure it is not empty.
        if(title === ''){
            setError(true)
            return
        }
        // TODO: Update database with new post data.
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

                {/** TODO: How to store the upload to database? External URL instead of upload? */}
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