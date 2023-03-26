import {useState} from 'react';
import { Search } from 'grommet-icons';
import { Box, TextInput,Button } from 'grommet';


  const SearchMovie = () => {

   const [query, setQuery]=useState('');
    
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&query=${query}`)
   .then((results) => results.json())
   .then((data) => {
    console.log(data)
   })
     const onChange=(e)=>{
        e.preventDefault();
         setQuery(e.target.value);
    }
    }
   

    
//     return ( 
//     <><div>
//         <Box fill align="center" justify="start" pad="large">
// 10    <Box width="medium" gap="medium">
// 12      <TextInput placeholder="search ..." value={query} onChange={onChange} /><Button plain icon={<Search />} onClick={SearchMovie} /> </Box>
// 14  </Box>
//         </div></>
//     )
//    }


  
  
  


export default SearchMovie;


