import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css'
import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home'
import RegisterView from './views/Register/RegisterView';
import ScheduleApp from './components/ScheduleApp/ScheduleApp';
import About from './components/About/About';

function App() {

  let [userData, setUserData] = useState({
    "login": false,
    "user":{}
  });
  const navigate = useNavigate();

  const handleLogin = (userCreds) =>{ 
    const URL = `http://localhost:3000/users/login`;
    axios.post(URL, userCreds).then(resp=>{
      setUserData(resp.data) 
      navigate("dashboard")
    }).catch(err=>{
      alert('Bad Credentials')
    });
  }

  const onLogout = () =>{
    setUserData({
      "login": false,
      "user":{}
    });
    navigate("/");
  }

  return (
    <>
      <Routes>
        {/* LANDING/LOGIN */}
        <Route path="/" exact element={
          <Home handleLogin={handleLogin} userId={userData.user.id}/>
        }/>
        {/* REGISTER */}
        <Route path="/register" element={
          <RegisterView />
        }/>
        {/* DASHBOARD DE TURNOS */}
        <Route path="/dashboard" element={
          <Dashboard onLogout={onLogout} userID={userData.user.id}/>
        }/>
        {/* SCHEDULE APP */}
        <Route path="/schedule" element={
          <ScheduleApp />
        }/>
        {/* ABOUT */}
        <Route path="/about" element={
          <About />
        }/>
        {/* APP DETAIL */}
        {/* CONTACT */}
      </Routes>
    </>
  )
}

export default App;
