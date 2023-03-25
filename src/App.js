import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';
import MovicList from './components/Movics/MovicList';
import UserInfo from "./components/Users/UserInfo";
import About from "./components/About";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import Comments from './components/Movics/Comments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChnQKdRbgUA0UO5E3jAHgbLoHl39dzwco",
  authDomain: "movic-2316b.firebaseapp.com",
  projectId: "movic-2316b",
  storageBucket: "movic-2316b.appspot.com",
  messagingSenderId: "748397665144",
  appId: "1:748397665144:web:e4cfe7d2a929f0cc8f868d",
  measurementId: "G-L1ZJ4LY9FT",
  databaseURL: "https://movic-2316b-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged((user) => {
      if(user){
        setLoggedIn(true)
      }
    })
  }, [])
  return (
    <Router>
      <div>
        <Navbar loggedIn={loggedIn} />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home loggedIn={loggedIn} />} />
            <Route path="/movies/*" element={<MovicList type='movie' />} />
            <Route path="/musics/*" element={<MovicList type='music' />} />
            <Route path="/register" element={<Register setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
            <Route path="/users/*" element={<UserInfo />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
