import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Image } from 'grommet';

function MusicAPI({ userArtist, userSong }) {

    // Define trackInfo state with initial values for the track name, artist, and image
    const [trackInfo, setTrackInfo] = useState({
        name: '',
        artist: '',
        image: ''
    });

    // Fetch track information from Last.fm API when userArtist or userSong prop values change
    useEffect(() => {
        const queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b8fb15424569c55a9e5e88ff5fd1a59a&artist=${userArtist}&track=${userSong}&format=json`;

        fetch(queryURL)
            .then(response => response.json())
            .then(data => {
                const track = data.track;
                // Update trackInfo state with new values from API response
                setTrackInfo({
                    name: track.name,
                    artist: track.artist.name,
                    image: track.album.image[2]['#text']
                });
            });
    }, [userArtist, userSong]);

    // Temporary Render the track information as a Grommet card with the track name, artist, and image as example of export
    return (
        <div>
            <Card height="medium" width="small" background="light-1">
                <CardHeader pad="medium">{trackInfo.name}</CardHeader>
                <CardBody pad="medium">{trackInfo.artist}
                    <Image
                        fit="cover"
                        src={trackInfo.image} alt={trackInfo.artist} /></CardBody>
            </Card>
        </div>
    );
}

export default MusicAPI;
