import './App.css';
import MainPage from './pages/Mainpage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
