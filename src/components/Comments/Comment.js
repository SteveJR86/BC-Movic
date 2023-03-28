import { Avatar, Box, Text } from 'grommet'
import React from 'react'

const Comment = ({ displayName, avatar, comment }) => {
    return (
        <Box direction='row' pad='xsmall' align='center' gap='1rem'>
          {avatar ? <Avatar src={avatar} /> : <Avatar background='dark-2'>{displayName[0]}</Avatar>}
          <Text><strong>{displayName}:</strong> {comment}</Text>
        </Box>
        
    )
}

export default Comment