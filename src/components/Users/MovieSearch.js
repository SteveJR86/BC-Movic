import {useState} from 'react';
import { Search, Add } from 'grommet-icons';
import { Box, TextInput,Card,Image,Heading,CardHeader,CardBody, Grid, Button} from 'grommet';
import "../Movics/movielist.css"


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
    <>
        <Box fill align="center" justify="start" pad="large">
   <Box width="medium" gap="medium">
      <TextInput placeholder="search for movies or music..." value={query} onChange={onChange} reverse icon={<Search />} />  </Box>
  </Box>
        

        <Box pad="large">
      <Grid columns={ 'medium' ? 'medium' : '75%'} gap="small">
        {results.map(results => { 
            return (
            <Card >
                <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading>
                <Button color="dark-1" primary icon={<Add color="brand" />} label="Add to Favourites" onClick={() => {}}
    /></CardHeader>
                <CardBody pad="medium">{results.plot}
                    <Image src={`${results.poster}`}  alt={results.title} fit="contain"/>{results.releaseDate}</CardBody>
                    
           
          </Card>
            )

        })}
     </Grid>
   </Box> 
           
          
          
        
        {/* <div className="searchcards">
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
    </div> */}
        
        </>
    )
    }


  
  
  


export default SearchMovie;


