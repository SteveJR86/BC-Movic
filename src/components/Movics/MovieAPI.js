import React, {useEffect, useState} from "react"
import {Card, CardHeader, CardBody, Carousel, Image, Heading} from "grommet"
import "./movielist.css"


//Movie API Function

const MovieAPI = () => {
    const [topRated, setTopRated] = useState([]);

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=10754df5d1765ad1f1824e9434972268`)
             .then((response) => response.json())
             
              .then(data => {
                console.log(data)
                let topTenArray = []

                for(let i = 0; i<data.results.length-10; i++) {
                    console.log(data.results[i])

                const topTen = {
                    name: data.results[i].title,
                    poster: `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`,
                    plot: data.results[i].overview,
                    releaseDate: data.results[i].release_date,   
                }
                topTenArray.push(topTen);
                setTopRated(topTenArray)
                console.log(topTenArray)
            }
            });
    }, []);

    
console.log(topRated)
    
    return (
      
         <div className="cards">
            <Carousel controls="arrows" height="large" width="large">
        {topRated.map(results => {
            return (<div>
            <Card style={{margin: "20px"}} height="large" width="large" background="light-1">
                <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading></CardHeader>
                <CardBody pad="medium">{results.plot}
                    <Image src={`${results.poster}`}  alt={results.title} fit="contain"/>{results.releaseDate}</CardBody>
            </Card>
        </div>)

        })


        } 
        </Carousel>
        </div>
     
       

        
 
   )
    }

    
    export default MovieAPI