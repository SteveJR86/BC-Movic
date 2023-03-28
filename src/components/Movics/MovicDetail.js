import React from 'react';
import { Link } from 'react-router-dom';
import MovieAPI from './MovieAPI';
import MusicAPISearch from './MusicAPISearch';
import Comments from "./Comments";

const MovicDetail = (props) => {
    if (props.type === "movie") {
        return (
            <div>
                <h2>{props.name}</h2>
                <div><MovieAPI name={props.name} /></div>
                <div><Comments /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>

        )

    } else if (props.type === "music") {
        return (
            <div>
                <h2>{props.name[0]}</h2>
                <div><MusicAPISearch name={props.name[0]} artist={props.name[1]} /></div>
                <div><Comments /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>
        )

    }
}

export default MovicDetail