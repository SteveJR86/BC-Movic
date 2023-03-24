import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MovieAPI from './MovieAPI';
import MusicAPI from './MusicAPI';
import Comments from "./Comments";
import AddComment from "./AddComment";

const MovicDetail = (props) => {
    if (props.type === "movie") {
        return (
            <div>
                <h2>{props.name} Detail</h2>
                <div><MovieAPI name={props.name} /></div>
                <div><Comments /></div>
                <div><AddComment /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>

        )

    } else if (props.type === "music") {
        return (
            <div>
                <h2>{props.name} Detail</h2>
                <div><MusicAPI name={props.name} /></div>
                <div><Comments /></div>
                <div><AddComment /></div>
                <Link to="../" role="button" className="btn btn-link">
                    Go back to list
                </Link>
            </div>
        )

    }
}

export default MovicDetail