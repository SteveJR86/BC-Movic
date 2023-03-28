import { getDatabase, onValue, ref } from 'firebase/database'
import { Card } from 'grommet'
import { CardHeader } from 'grommet/components'
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
    }), [database, movicid])
    
    return (
        <>
            <Card style={{margin: "10px", padding: "10px"}}>
                <CardHeader>Comments</CardHeader>
            {
                (comments ? comments.map((comment, index) => <Comment key={index} displayName={comment.displayName} comment={comment.comment} avatar={comment.avatar} />) : (<p>No Comments</p>))
            }
            </Card>

            <AddComment app={app} movicid={ movicid } comments={ comments } />
        </>
        
    )
}

export default Comments