import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing navigation bar component
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'


// left side data of world map component
import Asidedata from './components/Asidedata/Aside'
import './components/Asidedata/Aside.css'

import './App.css';

// footer component
import Footer from './components/Footer/Footer';
import './components/Footer/Footer.css'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={[<Navbar />,<Asidedata />,<Footer />]}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;