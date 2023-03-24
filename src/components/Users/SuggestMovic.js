import React from 'react'

const SuggestMovic = () => {
    return (

        function searchMovie (movie) {
        
            fetch(`https://api.themoviedb.org/3/search/movie?=${movie}&api_key=10754df5d1765ad1f1824e9434972268&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    
    
        }
    
        <div>SuggestMovic</div>


    )
}

export default SuggestMovic