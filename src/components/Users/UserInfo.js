import React, { useEffect, useState } from 'react';
import { Avatar, Box, Heading, Card, CardHeader, CardFooter, Grid, CardBody, Image } from 'grommet';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';



const UserInfo = () => {
    const user = getAuth().currentUser;

    const database = getDatabase();

    const [favourites, setFavourites] = useState([]);
    const [favouritesongs, setFavouritesongs] = useState([])



    useEffect(() => {
        const favouritesRef = ref(database, "favourites/" + user.displayName);
        const songsRef = ref(database, "favouritesongs/" + user.displayName);


        onValue(favouritesRef, (snapshot) => {
            const data = snapshot.val();
            setFavourites(data);
        });

        onValue(songsRef, (snapshot) => {
            const data = snapshot.val();
            setFavouritesongs(data);
        });
    }, [database, user.displayName]);


    return (
        <>
            <Box direction="row" gap="large" align="end">
            {user.photoURL ? <Avatar size='4xl' src={user.photoURL} /> : <Avatar size='4xl' background='dark-2'>{user.displayName[0]}</Avatar>}
            <Heading size='large'>{user.displayName}</Heading>
            </Box>


            <Box>
                <Card>
                    <h1>Favourite Movies</h1>
                    <Box pad="large" background="dark">
                        <Grid columns={'medium' ? 'medium' : '75%'} gap="small">
                            {favourites ? favourites.map((results, index )=> {
                                return (
                                    <Card key={index} background='background-front'>
                                        <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading>
                                        </CardHeader>
                                        <CardBody pad="medium">{results.plot}
                                            <Image src={`${results.poster}`} alt={results.title} fit="contain" />{results.releaseDate}
                                        </CardBody>
                                        <CardFooter pad="medium"></CardFooter>

                                    </Card>
                                )

                            }) : <p>No Favourites</p> }
                        </Grid>
                    </Box>

                </Card>
            </Box>
            <Box pad="large">
                <Card>
                    <h1>Favourite Songs</h1>
                    <Box pad="large">
                        <Grid columns={window.innerWidth >= 768 ? 'medium' : '75%'} gap="small">
                            {favouritesongs ? favouritesongs.map((result, index) => (
                                <Card key={index} background='background-front'>
                                    <CardHeader pad="medium">
                                        <Heading size="medium">{result.name}</Heading>
                                    </CardHeader>
                                    <CardBody pad="medium">
                                        <div><Heading size="small">{result.artist}</Heading></div>
                                        <Box gap="medium" direction="row" align="center" justify="center" wrap pad="medium">
                                            {result.wiki}
                                        </Box>
                                        <Image src={result.image || 'https://i.ibb.co/JRjprxY/My-project-1-2.png'} alt={`${result.artist} - ${result.name}`} fit="contain" />
                                    </CardBody>
                                </Card>
                            )) : <p>No Favourites</p>}
                        </Grid>
                    </Box>
                </Card>
            </Box>

        </>

    )
}

export default UserInfo
