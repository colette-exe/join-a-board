import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Mainpage from './Pages/Mainpage';
import './App.css'

function App() {
  const home = "/join-a-board";

  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path={home+"/"} element={<Navigate replace to={home+"/welcome"} />} />
          <Route path={home+"/welcome"} element={<LandingPage />} />
          <Route path={home+"/home"} element={<Mainpage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
