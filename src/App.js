import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import LoginForm from './components/Login/LoginForm';
import MovicList from './components/Movics/MovicList';
import UserInfo from "./components/Users/UserInfo";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/movies/*" element={<MovicList type='movie' />} />
            <Route path="/musics/*" element={<MovicList type='music' />} />
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
