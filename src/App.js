import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import LoginForm from './components/Login/LoginForm';
import Movic from './components/Movics/MovicList';

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
