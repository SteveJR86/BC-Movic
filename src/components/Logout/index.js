import { getAuth, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout({setLoggedIn}){
    const auth = getAuth();
    const nav = useNavigate();

    useEffect(() => {
      signOut(auth).then(() => {
        setLoggedIn(false)
        nav('/')
      }).catch((error) => {
        console.log(error)
      });
    }

    )
    
  
}

export default Logout