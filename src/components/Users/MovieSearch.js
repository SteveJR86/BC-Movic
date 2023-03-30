import {useState, useEffect} from 'react';
import { Search,  } from 'grommet-icons';
import { Box, TextInput,Card,Image,Heading,CardHeader,CardBody, Grid, Button, CardFooter} from 'grommet';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';
import AddComment from '../Comments/AddComment'




  const SearchMovie = () => {

    const [query, setQuery]=useState('');
    const [results,setResults]=useState([]);
    const [favourites, setFavourites]=useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

   fetch(`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&language=en-US&query=${query}`)
   .then((results) => results.json())
   .then((data) => {
    //console.log(data)

    let movieSearchArray = []
    
    for(let i = 0; i<data.results.length; i++) {

    const movieSearch = {
        movieID: data.results[i].id,
        name: data.results[i].title,
        poster: `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`,
        plot: data.results[i].overview,
        releaseDate: data.results[i].release_date,   
    }
    movieSearchArray.push(movieSearch)
    
    setResults(movieSearchArray)
    }}) 
    }; 
    const database = getDatabase();
    const user = getAuth().currentUser;
    useEffect(() => {
      const favouritesRef = ref(database, "favourites/" + user.displayName);
      

      onValue(favouritesRef, (snapshot) => {
          const data = snapshot.val();
          setFavourites(data);
      });

  }, [database, user.displayName]);
   
    const AddtoFavourites = (movieID) => {
      const movietoSave = results.find(results=>results.movieID===movieID)
      
     
      const user = getAuth().currentUser.displayName;
      
      const database = getDatabase();
      setFavourites(favourites.push(movietoSave))
      
      set(ref(database, "favourites/" + user),favourites)
      


    }

    return ( 
    <>
        <Box fill align="center" justify="start" pad="large">
   <Box width="medium" gap="medium">
      <TextInput placeholder="search for movies or music..." value={query} onChange={onChange} reverse icon={<Search />} />  </Box>
  </Box>
        

        <Box pad="large">
      <Grid columns={ 'medium' ? 'medium' : '75%'} gap="small">
        {results.map((results, index) => { 
            return (
            <Card key={index} className='movie' background='background-front'>
                <CardHeader pad="medium"><Heading size="medium">{results.name}</Heading>
                <Button color="dark-1"  onClick={()=> AddtoFavourites(results.movieID)}>

                  <Link to={{ 
                    pathname:`./UserInfo/${results.id}`,
                    // state: {movie}
                  }}></Link>Add to Favourites
                    </Button></CardHeader>
                <CardBody pad="medium">{results.plot}
                    <Image src={`${results.poster}`}  alt={results.title} fit="contain"/>{results.releaseDate}</CardBody>
                    <CardFooter ><AddComment/></CardFooter>
           
          </Card>
            )

        })}
     </Grid>
   </Box> 
           
        </>
    )
    }


  
  
  


export default SearchMovie;


