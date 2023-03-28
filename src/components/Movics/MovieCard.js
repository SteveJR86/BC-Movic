import React, {useEffect, useState} from 'react';
import { Card, CardBody, CardHeader, Image, Heading, } from 'grommet';
import "./movielist.css";

const MovieCard = (props) => {
    const [results, setMovie] = useState({

        name: '',
        poster: '',
        plot: '',
        releaseDate: ''

    });

    useEffect(() => {

        const movieQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&language=en-US&query=${props.name}`;

        fetch(movieQueryURL)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setMovie({

                    name: data.results[0].title,
                    poster: `https://image.tmdb.org/t/p/original/${data.results[0].poster_path}`,
                    plot: data.results[0].overview,
                    releaseDate: data.results[0].release_date,

                })
           
            });
    }, [props.name]);

    
    
    return (

        <div className="cards">
                        <Card style={{ margin: "20px" }} height="large" width="large" background="light-1">
                            <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading></CardHeader>
                            <CardBody pad="medium">{results.plot}
                                <Image src={`${results.poster}`} alt={results.title} fit="contain" />{results.releaseDate}</CardBody>
                        </Card>
                    </div>
    

    )
}

export default MovieCard