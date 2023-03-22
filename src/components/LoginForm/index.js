import React, { useState } from 'react'
import { Form, FormField, TextInput, Box, Button } from 'grommet/components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const [value, setValue] = useState({
        'email': '',
        'password': ''
    })
    
    function login(value) {
        const email = value.email;
        const password = value.password;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    return (
        <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {login(value)}}
        >
            <FormField name='email' htmlFor='email' label='Email'>
                <TextInput type='text' id='email' name='email' />
            </FormField>
            <FormField name='password' htmlFor='password' label='Password'>
                <TextInput type='password' id='password' name='password' />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Login" />
                <Button type="reset" label="Reset" />
            </Box>
        </Form>
    )
}

export default LoginForm