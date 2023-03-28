import React from "react";
import { Link } from 'react-router-dom';
import Login from '../Login';
import SearchMovie from "../Users/MovieSearch";

function Home({ loggedIn }) {
  if (loggedIn) {
    return (
      <SearchMovie />
    )
  } else {
    return (
      <div>
        <h1>Please Log In</h1>
        <Login />
        <h2>
          <Link to="./register" role="button" className="btn btn-link">
            Or register
          </Link>
        </h2>
      </div>
    )
  }

}

export default Home;