<<<<<<< HEAD
import React from "react";
import { BrowserRouter } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthProvider"; // 인증 컨텍스트
import RoutesSetup from "./routes/RoutesSetup"; // 라우트 설정

function App() {
  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
=======
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import UserLaundarypage from './pages/UserLaundarypage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/laundry/:name" element={<UserLaundarypage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
>>>>>>> 35d77a56dda377e2783ddf1740eb10d09d0891fd
  );
}

export default App;
