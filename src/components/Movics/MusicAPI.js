import React, { useEffect, useState } from 'react';
import { Grid, Card, CardBody, CardHeader, Image } from 'grommet';

function MusicAPITop10() {
    const [topTracks, setTopTracks] = useState([]);
    // Fetch tracks information from Last.fm API 
    useEffect(() => {
        const queryURL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b8fb15424569c55a9e5e88ff5fd1a59a&format=json`;

        fetch(queryURL)
            .then(response => response.json())
            .then(data => {
                // Render Tracks to top 10 
                const tracks = data.tracks.track.slice(0, 10).map(track => ({
                    name: track.name,
                    artist: track.artist.name,
                    image: track.image[2]['#text']
                }));
                setTopTracks(tracks);
            })

    }, []);

    return (
        <div>
            <Grid
                columns={{
                    count: 10,
                    size: 'auto',
                }}
                gap="small"
            >
                {topTracks.map(track => (
                    <Card key={track.name} height="medium" width="small" background="light-1">
                        <CardHeader pad="medium">{track.name}</CardHeader>
                        <CardBody pad="medium">
                            <div>{track.artist}</div>
                            <Image fit="cover" src={track.image} alt={track.artist} />
                        </CardBody>
                    </Card>


                ))}
            </Grid>
        </div>
    );
}

export default MusicAPITop10;
