import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Footer from './Footer';
import Contact from './Contact';  // Ensure Contact is imported
import './App.css';  // Ensure CSS import is correct
import Home from './Home';
import DownloadCV from './DownloadCV';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path="/DownloadCV" element={<DownloadCV/>}/>
        </Routes>
    </Router>
  );
}

export default App;
