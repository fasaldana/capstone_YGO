import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';

export default function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}
