import React from 'react';
import { Avatar, Box, Heading,Card} from 'grommet';
import {  User } from "grommet-icons";


const UserInfo = () => {
    return (

    <>
       <Box direction="row" gap="large" align="end">
            <Avatar size="4xl" background="brand"><User color="text-strong" />
            </Avatar><Heading >Chido</Heading>
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