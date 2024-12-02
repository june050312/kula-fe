import './components.css';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>KULA</h1>
      </Link>
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
