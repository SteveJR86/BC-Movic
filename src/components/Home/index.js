import React from "react";

function Home({loggedIn}){
  if(loggedIn){
    return (
      <h1>Welcome Back</h1>
  )
  } else {
    return (
      <h1>Please Log In</h1>
    )
  }
  
}

export default Home;