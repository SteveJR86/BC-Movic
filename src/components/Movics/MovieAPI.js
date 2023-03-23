import React, {useEffect, useState} from "react"
import {Card, CardHeader, CardBody} from "grommet"




const MovieAPI = () => {
    const [topRated, setTopRated] = useState({
        name: '',
        plot: '',
        poster: '',
        releaseDate: '',
    });

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=10754df5d1765ad1f1824e9434972268`)
             .then((response) => response.json())
             
              .then(data => {
                console.log(data)
                
                setTopRated({
                    
                    name: data.results[0].title,
                    poster: data.results[0].poster_path,
                    plot: data.results[0].overview,
                    releaseDate: data.results[0].release_date,

                });
            });
    }, [topRated]);

   
    return (
        <div>
            <Card height="medium" width="small" background="light-1">
                <CardHeader pad="medium">{topRated.name}{topRated.releaseDate}</CardHeader>
                <CardBody pad="medium">{topRated.poster}{topRated.plot}
                    <img src="https://api.themoviedb.org/3/movie/{topRated.poster}" alt={topRated.title} /></CardBody>
            </Card>
        </div>
    );
    }

    export default MovieAPI