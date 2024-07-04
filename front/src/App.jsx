import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import './App.css'
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/LoginView/Login'
import RegisterView from './views/Register/RegisterView';
import ScheduleApp from './components/ScheduleApp/ScheduleApp';
import About from './components/About/About';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';



function App() {

  let [userData, setUserData] = useState({
    "login": false,
    "user":{}
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (userCreds) =>{ 
    const URL = `http://localhost:3000/users/login`;
    axios.post(URL, userCreds).then(resp=>{
      // localStorage.setItelocalStorage.setItem("isAutentic", true);
      if(resp.status===200){
        setUserData(resp.data)
        navigate("/dashboard")
        sessionStorage.setItem("isAutentic", resp.data.user.id);
        console.log(resp);
      } else {
        alert('Bad Credentials')
      }
    }).catch((err)=>{
      alert('Bad Credentials')
    });
  }

  const onLogout = () =>{
    setUserData({
      "login": false,
      "user":{}
    });
    sessionStorage.removeItem("isAutentic");
    navigate("/");
  }
  
  return (
    <>
      {location.pathname !== "/login" && <Navbar onLogout={onLogout} />}
      <Routes>
        {/* HOME */}
        <Route path="/" exact element={
          <Home/>
        }/>
        {/* LANDING/LOGIN */}
        <Route path="/login" exact element={
          <Login handleLogin={handleLogin} userId={userData.user.id}/>
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
