
import './App.css';
import {  Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Profile from './components/Profile'
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
