import React from 'react'
import AddComment from './AddComment'
import Comment from './Comment'

const Comments = ({ app, movicid }) => {
    const commentData = [
        {
            email:  "steven@test.com",
            comment: "here is the first comment"
        },
        {
            email:  "bob@test.com",
            comment: "here is the second comment"
        },
        {
            email:  "fred@test.com",
            comment: "here is the third comment"
        },
    ]
    return (
        <>
            <h1>This is the comments page with comments appearing below</h1>
            {
                commentData.map((comment, index) => <Comment key={index} username={comment.email} comment={comment.comment} />)
            }
            

            <AddComment app={app} movicid={ movicid } />
        </>
        
    )
}

export default Comments