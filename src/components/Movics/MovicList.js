import React from 'react'
import MovieAPI from './MovieAPI'
import MusicAPI from './MusicAPI'

const MovicList = (props) => {
  if (props.type === "movie") {
    return (
      <div>
        <h2>Movie List</h2>
        <div><MovieAPI /></div>
      </div>
    )

  } else if (props.type === "music") {
    return (
      <div>
        <h2>Music List</h2>
        <div><MusicAPI /></div>
      </div>
    )

  } else {
    return (
      <div>
        <h2>Movie List</h2>
        <div><MovieAPI /></div>
        <hr />
        <h2>Music List</h2>
        <div><MusicAPI /></div>
      </div>
    )

  }
}

export default MovicList