import React, {useEffect, useState} from 'react';
import { Avatar, Box, Heading,Card, CardHeader, CardFooter, Grid, CardBody,Image} from 'grommet';
import { getAuth } from 'firebase/auth';
import AddComment from '../Comments/AddComment'
import { getDatabase, ref, onValue } from 'firebase/database';



const UserInfo = () => {
    const user = getAuth().currentUser;

    const database = getDatabase();
    const [favourites, setFavourites]=useState([]);

    useEffect(() => onValue(
        ref(database, "favourites/" + user.displayName), (snapshot) => {
            const data = snapshot.val()
            setFavourites(data);
            console.log(favourites);
    }), [])
    return (


//     <>
//        <Box direction="row" gap="large" align="end">
//             <Avatar size="4xl" background="brand" src={user.photoURL}>
//             </Avatar><Heading >{user.displayName}</Heading>
//         </Box>

//         <Box pad="large" background="dark">
//       <Grid columns={ 'medium' ? 'medium' : '75%'} gap="small">
//         {favouriteArray.map((results => { 
//             return (
//             <Card >
//                 <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading>
//                </CardHeader>
//                 <CardBody pad="medium">{results.plot}
//                     <Image src={`${results.poster}`}  alt={results.title} fit="contain"/>{results.releaseDate}</CardBody>
//                     <CardFooter pad="medium"><AddComment/></CardFooter>
           
//           </Card>
//             )

//         }))}
//      </Grid>
//    </Box> 
    <div>
    <Box>
        <Card>
        <h1>Favourite Movies</h1>
        <p>No added favourites yet map</p> 
        </Card>
        </Box>
        <Box pad="large">
            <Card>
        <h1>Favourite Songs</h1>
        <p>No added favourites yet map</p>
        </Card>
        </Box>

        </div>

    )
}

export default UserInfo