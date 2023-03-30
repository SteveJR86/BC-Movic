import { useState } from 'react';
import { Search, } from 'grommet-icons';
import { Box, TextInput, Card, Image, Heading, CardHeader, CardBody, Grid, Button } from 'grommet';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SearchMusic = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [favouritesongs, setFavouritesongs] = useState([])

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);

        if (e.target.value.length > 2) { // check if searchQuery is not less than 2 character before calling fetchResults
            fetchResults();
        } else {
            return
        }
    };

    const fetchResults = () => {
        const API_KEY = 'b8fb15424569c55a9e5e88ff5fd1a59a';
        const queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchQuery}&api_key=${API_KEY}&format=json&limit=20`;

        fetch(queryURL) // fix typo here
            .then(response => response.json())
            .then(data => {
                const tracks = data.results.trackmatches.track.map((track) => ({
                    name: track.name,
                    artist: track.artist,
                    image: '',
                    wiki: '',
                }));

                setSearchResults(tracks);

                // Loop through each track and fetch image from track information LastFM API
                tracks.forEach(track => {
                    const albumQueryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b8fb15424569c55a9e5e88ff5fd1a59a&artist=${encodeURIComponent(track.artist)}&track=${encodeURIComponent(track.name)}&format=json`;

                    fetch(albumQueryURL)
                        .then(response => response.json())
                        .then(data => {
                            // Update the image property of the current track object if a valid image URL is returned 
                            const trackInfo = data.track;

                            if (trackInfo.album && trackInfo.album.image) {
                                const image = trackInfo.album.image[3];
                                if (image) {
                                    track.image = image['#text'];
                                }
                            }

                            // Update the wiki property of the current track object if a valid wiki URL is returned 
                            if (trackInfo.wiki && trackInfo.wiki.summary) {
                                track.wiki = trackInfo.wiki.summary.replace(/<a.*<\/a>/, '');
                            }

                            setSearchResults(tracks => [...tracks]);
                        })
                });
            })
    };


    const handleAddToFavorites = (name) => {
        console.log(name)

        const songtoSave = searchResults.find(searchResults => searchResults.name === name);

        const user = getAuth().currentUser.displayName;

        const database = getDatabase();
        setFavouritesongs(favouritesongs.push(songtoSave))

        set(ref(database, "favouritesongs/" + user), favouritesongs)

        // Perform some action to add the music to favorites
        console.log(favouritesongs);
    };

    return (
        <>
            <Box fill align="center" justify="start" pad="large">
                <Box width="medium" gap="medium">
                    <TextInput placeholder="search for movies or music..." value={searchQuery} onChange={handleInputChange} reverse icon={<Search />} />
                </Box>
            </Box>

            <Box pad="large">
                <Grid columns={window.innerWidth >= 768 ? 'medium' : '75%'} gap="small">
                    {searchResults.map((result, index) => (
                        <Card key={index} background='background-front'>
                            <CardHeader pad="medium">
                                <Heading size="medium">{result.name}</Heading>

                                <Button color='dark-1' onClick={() => handleAddToFavorites(result.name)}>
                                    <Link to={{
                                        pathname: `./UserInfo/${result.name.replace("?", "")}`,
                                    }}></Link>Add to Favourites
                                </Button>
                            </CardHeader>
                            <CardBody pad="medium">
                                <div><Heading size="small">{result.artist}</Heading></div>
                                <Box gap="medium" direction="row" align="center" justify="center" wrap pad="medium">
                                    {result.wiki}
                                </Box>
                                <Image src={result.image || 'https://i.ibb.co/JRjprxY/My-project-1-2.png'} alt={`${result.artist} - ${result.name}`} fit="contain" />
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
            </Box>
        </>
    )
};

export default SearchMusic;