import {useState} from 'react';
import { Search } from 'grommet-icons';
import { Box, TextInput,Button,Card,Image,Heading,CardHeader,CardBody } from 'grommet';


  const SearchMovie = () => {

    const [query, setQuery]=useState('');
    const [results,setResults]=useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

   fetch(`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&language=en-US&query=${query}`)
   .then((results) => results.json())
   .then((data) => {
    console.log(data)

    let movieSearchArray = []
    
    for(let i = 0; i<data.results.length; i++) {

    const movieSearch = {
        name: data.results[i].title,
        poster: `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`,
        plot: data.results[i].overview,
        releaseDate: data.results[i].release_date,   
    }
    movieSearchArray.push(movieSearch)
    setResults(movieSearchArray)
    }})
    }

    return ( 
    <><div>
        <Box fill align="center" justify="start" pad="large">
   <Box width="medium" gap="medium">
      <TextInput placeholder="search ..." value={query} onChange={onChange} /><Button plain icon={<Search />} onClick={SearchMovie} /> </Box>
  </Box>
        </div>
       <div>
       {results.map(results => {
            return (<div>
            <Card style={{margin: "20px"}} height="large" width="large" background="light-1">
                <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading></CardHeader>
                <CardBody pad="medium">{results.plot}
                    <Image src={`${results.poster}`}  alt={results.title} fit="contain"/>{results.releaseDate}</CardBody>
            </Card>
        </div>)

        })
        } 
       </div>
        
        </>
    )
    }


  
  
  


export default SearchMovie;


