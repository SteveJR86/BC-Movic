import { getDatabase, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import AddComment from './AddComment'
import Comment from './Comment'

const Comments = ({ app, movicid }) => {
    
    const [comments, setComments ] = useState([])
    const database = getDatabase();
    
    
    useEffect(() => onValue(
        ref(database, "movic/" + movicid), (snapshot) => {
            const data = snapshot.val()
            setComments(data);
    }), [])
    
    return (
        <>
            <h1>This is the comments page with comments appearing below</h1>
            {
                (comments ? comments.map((comment, index) => <Comment key={index} username={comment.email} comment={comment.comment} />) : (<p>No Comments</p>))
            }
            

            <AddComment app={app} movicid={ movicid } comments={ comments } />
        </>
        
    )
}

export default Comments