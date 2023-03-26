import {useState, useEffect} from 'react';

// const searchMovie = () => {
   

//         useEffect (() => {
//             fetch(`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268&language=en-US&query=[gladiator]`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
//         })
      
//         }
  
  const SearchMovie = async(e)=>{

   const [query, setQuery]=useState('');
    useEffect(() => {
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=10754df5d1765ad1f1824e9434972268=${query}`;
      const res=  fetch(url);
      const data= res.json();
      console.log(data);
      setQuery(data.results);
    }
    catch(e) {
      console.log(e);}
    });

    const changeHandler=(e)=>{
    setQuery(e.target.value);
    }
   }


  
  
  


export default SearchMovie;


