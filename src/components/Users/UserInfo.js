import React from 'react';
import { Avatar, Box, Heading,Card} from 'grommet';
import { getAuth } from 'firebase/auth';


const UserInfo = () => {
    const user = getAuth().currentUser;
    return (

    <>
       <Box direction="row" gap="large" align="end">
            <Avatar size="4xl" background="brand" src={user.photoURL}>
            </Avatar><Heading >{user.displayName}</Heading>
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