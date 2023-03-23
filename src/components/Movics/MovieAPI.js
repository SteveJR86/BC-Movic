import React, {useEffect, useState} from "react"
import {Card, CardHeader, CardBody} from "grommet"




const MovieAPI = () => {
    const [topRated, setTopRated] = useState([]);

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=10754df5d1765ad1f1824e9434972268`)
             .then((response) => response.json())
             
              .then(data => {
                console.log(data)

                const topTen = (results => ({
                    name: data.results[0].title,
                    poster: `https://image.tmdb.org/t/p/original/${data.results[0].poster_path}`,
                    plot: data.results[0].overview,
                    releaseDate: data.results[0].release_date,   
                }));
                setTopRated(topTen)
    
            });
    }, []);

    

    
    return (
        
    //  {topRated.map(results => (
        <div>
            <Card height="medium" width="medium" background="light-1">
                <CardHeader pad="medium">{topRated.name}{topRated.releaseDate}</CardHeader>
                <CardBody pad="medium">{topRated.plot}
                    <img src={`${topRated.poster}`}  alt={topRated.title} /></CardBody>
            </Card>
        </div>

    //  ))
    )

    }

    export default MovieAPI