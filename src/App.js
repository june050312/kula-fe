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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/laundry/:name" element={<UserLaundarypage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
