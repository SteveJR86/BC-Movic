import React, { useEffect, useState } from 'react';
import { Carousel, Card, CardBody, CardHeader, Image, Heading, Tag, Box } from 'grommet';
import { Link } from 'react-router-dom';
import "./movielist.css";

const API_KEY = 'b8fb15424569c55a9e5e88ff5fd1a59a';

function MusicAPITop10(props) {
    // Using the useState hook to define and initialize the state variable topTracks with an empty array
    const [topTracks, setTopTracks] = useState([]);

    // Using the useEffect hook to fetch data from an API when the component mounts
    useEffect(() => {
        const top10QueryURL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

        // Fetching top10 data from the LastFM API using the above 
        fetch(top10QueryURL)
            .then(response => response.json())
            .then(data => {
                // Extracting the required data from the response and mapping it to an array of objects with required properties
                const tracks = data.tracks.track.slice(0, 10).map(track => ({
                    name: track.name,
                    artist: track.artist.name,
                    playcount: track.playcount,
                    listeners: track.listeners,
                    image: '',
                    wiki: '',
                }));

                // Updating the topTracks state with the extracted data
                setTopTracks(tracks);

                // Looping through each track and fetching image from track information LastFM API
                tracks.forEach(track => {
                    const albumQueryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b8fb15424569c55a9e5e88ff5fd1a59a&artist=${encodeURIComponent(track.artist)}&track=${encodeURIComponent(track.name)}&format=json`;

                    fetch(albumQueryURL)
                        .then(response => response.json())
                        .then(data => {
                            // Updating the image property of the current track object if a valid image URL is returned 
                            const trackInfo = data.track;

                            if (trackInfo.album && trackInfo.album.image) {
                                const image = trackInfo.album.image[3];
                                if (image) {
                                    track.image = image['#text'];
                                }
                            }
                            // Updating the wiki property of the current track object if a valid wiki URL is returned 
                            if (trackInfo.wiki && trackInfo.wiki.summary) {
                                track.wiki = trackInfo.wiki.summary.replace(/<a.*<\/a>/, '');
                            }
                            setTopTracks(tracks => [...tracks]);
                        })

                });
            })
    }, []);

    // Rendering the topTracks data as a carousel of cards with links to individual music pages
    return (
        <div className="cards">
            <Carousel controls="arrows" height="large" width="large">
                {topTracks.map(track => (
                    <Card key={track.name} Card style={{ margin: "20px" }} height="large" width="large" background="light-1">
                        <CardHeader pad="medium">
                            <Heading size="medium">
                                <Link to={`../musics/${track.name}`} state={[track.name, track.artist]} role="button" className="btn btn-link">
                                    {track.name}
                                </Link>
                            </Heading>
                        </CardHeader>
                        <CardBody pad="medium">
                            <div><Heading size="small">{track.artist}</Heading></div>
                            <Box gap="medium" direction="row" align="center" justify="center" wrap pad="medium">
                                {track.wiki}
                            </Box>
                            <Image fit="contain" src={track.image || 'https://i.ibb.co/JRjprxY/My-project-1-2.png'} alt={track.artist} />
                            <Box gap="medium" direction="row" align="center" justify="center" wrap key="small" pad="medium">
                                <Tag name="Play Count" value={track.playcount} />
                                <Tag name="Listeners" value={track.listeners} />
                            </Box>
                        </CardBody>
                    </Card>
                ))}
            </Carousel>
        </div>
    );
}

export default MusicAPITop10;
