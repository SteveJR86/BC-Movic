import React from 'react';
import { Link } from 'react-router-dom';
//import MovieAPI from './MovieAPI';
import MusicAPISearch from './MusicAPISearch';
import Comments from '../Comments/Comments';
import MovieCard from './MovieCard';

const MovicDetail = (props) => {
    if (props.type === "movie") {
        return (
            <div>

                <div><MovieCard name={props.name} /></div>
                <div><Comments app={props.app} movicid={props.name} /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>

        )

    } else if (props.type === "music") {
        return (
            <div>

                <div><MusicAPISearch name={props.name[0]} artist={props.name[1]} /></div>
                <div><Comments app={props.app} movicid={props.name} /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>
        )

    }
}

export default MovicDetail