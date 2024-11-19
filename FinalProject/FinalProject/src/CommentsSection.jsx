import React, { useState } from "react"
import './CommentsSection.css'

const CommentsSection = ({post, setPost}) => {
    const [newComment, setNewComment] = useState('')

    const handleTextChange = (e) => {
        setNewComment(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Update comments (state variable, not database).
        if (post.comments === null) {
            setPost({...post, comments: [newComment]})
        }
        else {
            setPost({...post, comments: [...post.comments, newComment]})
        }

        setNewComment('')
    }

    return (
        <div className="commentsContainer">
            <h2>Comments</h2>

            <div>
                {post && post.comments ? 
                    <div>
                        {post.comments.map((comment, index) => {
                            return (
                                <p className="existingComments" key={index}>{comment}</p>
                        )})}
                    </div>
                    :
                    <p>No comments yet.</p>
                }
            </div>

            <form id="newComment" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newComment}
                    placeholder="Add a comment..."
                    onChange={handleTextChange}
                    alt="New comment form."
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentsSection