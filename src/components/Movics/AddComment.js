import React, { useState } from 'react';
import { Button, Card, Form, FormField, TextArea } from 'grommet/components';
import { getAuth } from '@firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

const AddCommentForm = ({ app, movicid }) => {
    const [value, setValue] = useState({
        "comment": ""
    })
    const auth = getAuth()
    return (
        <Form 
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onSubmit={({value}) => {
                    const database = getDatabase(app);
                    set(ref(database, "movic/" + movicid), {
                        email: auth.currentUser.email,
                        comment: value.comment
                    })
                    setValue({"comment": ""})
                }}
            >
                <FormField name="comment" htmlFor="comment-area" label="Add new comment:">
                    <TextArea
                        id="comment-area"
                        name="comment"
                        required
                    />
                </FormField>
                <Button type="submit" primary label="Add Comment" />
            </Form>
    )
}

const PleaseLogIn = () => {
    return (
        <p>Please log in to add comments</p>
    )
}

const AddComment = ({ app, movicid  }) => {
    // Initialize Realtime Database and get a reference to the service
    const auth = getAuth()
    
    return (
        <Card style={{ padding:"10px", backgroundColor:"#DDDDDD"}}>
            {(auth.currentUser ? <AddCommentForm app={app} movicid={movicid} /> : <PleaseLogIn />)}
        </Card>
        
            
    )
}

export default AddComment