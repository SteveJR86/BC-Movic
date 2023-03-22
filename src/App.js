import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import LoginForm from './components/Login/LoginForm';
import Movic from './components/Movics/MovicList';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
  measurementId: "G-L1ZJ4LY9FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/movies" element={<Movic />} />
            <Route path="/musics" element={<Movic />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
