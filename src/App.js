import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
