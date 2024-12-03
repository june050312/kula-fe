import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components.css';
import {Link} from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
<<<<<<< HEAD
      <Link to="/">
        <h1>KULA</h1>
      </Link>
=======
      <div 
        className="navbar-brand"
        onClick={() => navigate('/')}
      >
        KULA
      </div>
>>>>>>> 35d77a56dda377e2783ddf1740eb10d09d0891fd
      <div className="nav-buttons">
        <Link className="login-button" to="/login">
          로그인
        </Link>
        <Link className="signup-button" to="/signup">
          회원가입
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
