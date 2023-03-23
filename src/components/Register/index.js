import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormField, TextInput, Box, Button } from 'grommet/components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Register({setLoggedIn}){
    const [value, setValue] = useState({
        'email': '',
        'password': '',
        'password2': ''});
    const nav = useNavigate();

    function validate(value){
        if (value.password===value.password2){
            const auth = getAuth();
            const email = value.email;
            const password = value.password
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setLoggedIn(true)
                nav('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`${errorCode} : ${errorMessage}`)
            });
        } else {
            console.log('passwords do not match')
        }
    }

    return (
        <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {validate(value)}}
        >
            <FormField name='email' htmlFor='email' label='Email'>
                <TextInput type='text' id='email' name='email' />
            </FormField>
            <FormField name='password' htmlFor='password' label='Password'>
                <TextInput type='password' id='password' name='password' />
            </FormField>
            <FormField name='password2' htmlFor='password2' label='Repeat Password'>
                <TextInput type='password' id='password2' name='password2' />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
            </Box>
        </Form>
    )
}

export default Register