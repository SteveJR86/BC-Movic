import React, { useEffect } from 'react';

const searchMovie = () => {
   

        useEffect (() => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&language=en-US&query=${movie}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        })
      
        }

    
    



export default SuggestMovic