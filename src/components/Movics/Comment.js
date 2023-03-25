import React from 'react'

const Comment = ({ username, comment }) => {
    return (
        <>
          <p><strong>{username}:</strong> {comment}</p>
        </>
        
    )
}

export default Comment