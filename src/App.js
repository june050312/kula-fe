import './App.css';
import MainPage from './pages/Mainpage';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-buttons">
          <button className="login-button">로그인</button>
          <button className="signup-button">회원가입</button>
        </div>
      </nav>

      <div className="content">
        <MainPage />
      </div>

      <footer className="footer">
        <p>ⓒ 2024 KULA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
