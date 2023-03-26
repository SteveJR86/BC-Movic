import React from 'react';
import movieSearch from './SuggestMovic';
import { Search } from 'grommet-icons';
import { Box, TextInput,Button } from 'grommet';

const UserInfo = () => {
    return (
        <><h1>UserInfo</h1>
        <div>
        <Box fill align="center" justify="start" pad="large">
10    <Box width="medium" gap="medium">
12      <TextInput icon={<Search />} reverse placeholder="search ..." />
13    <Button plain icon={<Search />} onClick={movieSearch} /> </Box>
14  </Box>
        </div></>

                    
        
    )
}

export default UserInfo