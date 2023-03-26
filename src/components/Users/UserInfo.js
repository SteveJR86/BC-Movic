import React from 'react';
import SearchMovie from './MovieSearch';
import { Avatar, Box, Heading} from 'grommet';
import {  User } from "grommet-icons";


const UserInfo = () => {
    return (

    <><Box direction="row" gap="small">
            <Avatar size="4xl" background="brand"><User color="text-strong" />
            </Avatar><Heading >Username</Heading>
        </Box><SearchMovie />
        <Box>
        <h1>Favourite Movies</h1>
        </Box>
        <Box>
        <h1>Favourite Songs</h1>
        </Box>
        </>

    )
}

export default UserInfo