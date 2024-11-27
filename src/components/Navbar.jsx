import './components.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-buttons">
        <button className="login-button">로그인</button>
        <button className="signup-button">회원가입</button>
      </div>
    </nav>
  );
}

export default Navbar;
