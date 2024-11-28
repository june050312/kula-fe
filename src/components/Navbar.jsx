import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div 
        className="navbar-brand"
        onClick={() => navigate('/')}
      >
        KULA
      </div>
      <div className="nav-buttons">
        <button className="login-button">로그인</button>
        <button className="signup-button">회원가입</button>
      </div>
    </nav>
  );
}

export default Navbar;
