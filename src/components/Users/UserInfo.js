import React from 'react';
import { Avatar, Box, Heading,Card} from 'grommet';
import { getAuth } from 'firebase/auth';


const UserInfo = () => {
    const user = getAuth();
    
    return (

    <>
       <Box direction="row" gap="large" align="end">
       {user.currentUser.photoURL ? <Avatar size='4xl' src={user.currentUser.photoURL} /> : <Avatar size='4xl' background='dark-2'>{user.currentUser.displayName[0]}</Avatar>}
            <Heading >{user.currentUser.displayName}</Heading>
        </Box>

        <Box pad="large" background="dark">
         <Card >
        <h1>Favourite Movies</h1>
        <p>No added favourites yet</p>
        </Card>
        </Box>
        <Box pad="large">
            <Card>
        <h1>Favourite Songs</h1>
        <p>No added favourites yet</p>
        </Card>
        </Box>

        </>

    )
}

export default UserInfo