import React, { useEffect, useState } from 'react';
import { Carousel, Card, CardBody, CardHeader, Image, Heading } from 'grommet';
import "./movielist.css"

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
        <div className="cards">
            <Carousel controls="arrows" height="large" width="large">
                {topTracks.map(track => (
                    <Card key={track.name} Card style={{ margin: "20px" }} height="large" width="large" background="light-1">
                        <CardHeader pad="medium"><Heading size="medium">{track.name}</Heading></CardHeader>
                        <CardBody pad="medium">
                            <div><Heading size="small">{track.artist}</Heading></div>
                            <Image fit="cover" src={track.image} alt={track.artist} />
                        </CardBody>
                    </Card>
                ))}
            </Carousel>
        </div>
    );
}

export default MusicAPITop10;
