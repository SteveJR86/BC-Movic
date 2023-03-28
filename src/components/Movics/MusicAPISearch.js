import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Image, Heading, Tag, Box } from 'grommet';
import { Link } from 'react-router-dom';
import "./movielist.css";

const API_KEY = 'b8fb15424569c55a9e5e88ff5fd1a59a';

function MusicAPISearch(props) {
    const [track, setTrack] = useState({
        name: '',
        artist: '',
        playcount: '',
        listeners: '',
        image: '',
        wiki: ''
    });
    useEffect(() => {
        const queryURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${encodeURIComponent(props.artist)}&track=${encodeURIComponent(props.name)}&format=json`;

        fetch(queryURL)
            .then(response => response.json())
            .then(data => {
                const trackInfo = data.track;

                setTrack({
                    name: trackInfo.name,
                    artist: trackInfo.artist.name,
                    playcount: trackInfo.playcount,
                    listeners: trackInfo.listeners,
                    image: trackInfo.album ? trackInfo.album.image[3]['#text'] : '',
                    wiki: trackInfo.wiki && trackInfo.wiki.summary ? trackInfo.wiki.summary.replace(/<a.*<\/a>/, '') : ''
                });
            });
    }, [props.artist, props.name]);

    return (
        <div className="cards">
            <Card Card style={{ margin: "20px" }} height="large" width="large" background="light-1">
                <CardHeader pad="medium">
                    <Heading size="medium">{track.name}</Heading>
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
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </Card>
        </div>
    );
}

export default MusicAPISearch;