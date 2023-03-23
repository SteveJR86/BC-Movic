import React, { useState } from 'react';
import { Button, Form, FormField, TextArea } from 'grommet/components';
import { getAuth } from '@firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyChnQKdRbgUA0UO5E3jAHgbLoHl39dzwco",
    authDomain: "movic-2316b.firebaseapp.com",
    projectId: "movic-2316b",
    storageBucket: "movic-2316b.appspot.com",
    messagingSenderId: "748397665144",
    appId: "1:748397665144:web:e4cfe7d2a929f0cc8f868d",
    measurementId: "G-L1ZJ4LY9FT",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://movic-2316b-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const AddComment = () => {
    const [value, setValue] = useState({
        "comment": ""
    })
    const auth = getAuth()
    return (
        <Form 
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={({value}) => {
                console.log(value, auth)

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

export default AddComment