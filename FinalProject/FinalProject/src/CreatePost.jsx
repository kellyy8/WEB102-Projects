import React, { useState } from 'react'
import './CreatePost.css'

const CreatePost = () => {
    const [isUpdate, setIsUpdate] = useState(false)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageURL, setImageURL] = useState('')
    
    const handleTextChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        if (id === 'title') {
            setTitle(value)
        }
        else if (id === 'content') {
            setContent(value)
        }
        else if (id === 'imageURL') {
            setImageURL(value)
        }
    }

    const handleSubmit = () => {
        setIsUpdate(!isUpdate)
        // TODO: Update database with new post data.
    }

    return (
        <div className="createPostWrapper">
            {isUpdate ? <h1>Update Post</h1> : <h1>Create Post</h1>}

            <form id="postForm">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} onChange={handleTextChange}/>
                
                <label htmlFor="content">Content</label>
                <textarea id="content" value={content} onChange={handleTextChange}/>

                {/** TODO: How to store the upload to database? External URL instead of upload? */}
                <label htmlFor="imageURL">Image URL</label>
                <input id="imageURL" type="text" value={imageURL} onChange={handleTextChange}/>

                <br/>
                <button id="submitPost" type="submit" onClick={handleSubmit}>
                    {isUpdate ? 'Update Post' : 'Create Post'}
                </button>
            </form>

        </div>
    )
}

export default CreatePost