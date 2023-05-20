import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Mainpage from './Pages/Mainpage';
import BoardPage from './Pages/BoardPage';
import AnnouncementPage from './Pages/AnnouncementPage';
import './App.css'

function App() {
  const home = "/join-a-board";

  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path={home+"/"} element={<Navigate replace to={home+"/welcome"} />} />
          <Route path={home+"/welcome"} element={<LandingPage />} />
          <Route path={home + "/home"} element={<Mainpage />} />
          <Route path={home+"/boards"} element={<BoardPage />} />
          <Route path={home+"/announcements"} element={<AnnouncementPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
