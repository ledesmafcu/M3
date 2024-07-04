/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import Turns from "../../components/Turns/Turns";
import axios from "axios";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
const { main } = styles;

function Dashboard({onLogout, userID}) {
    const [ turnos, setTurnos ] = useState([]);
    const[ user, setUser ] = useState({});

const navigate = useNavigate("/");

    useEffect(()=>{
        if(!userID) navigate("/");
        const URL = `http://localhost:3000/users/${userID}`;
        axios.get(URL).then(resp=>{
            setTurnos(resp.data.appointments);
            setUser(resp.data);
        }).catch(err=>{
            alert("me rompi!")
        });
    },[]);

    return(
        <div className="container">
            <div className="row">
                <Navbar onLogout={onLogout}/>
                <SideBar/>
                <div className={`col-9 ${main}`}>
                    <Turns turnos={turnos} name={user.name}/>
                </div>
            </div>
        </div>
    )    
}

export default Dashboard;