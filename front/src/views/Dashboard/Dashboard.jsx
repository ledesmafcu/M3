/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Turns from "../../components/Turns/Turns";
import axios from "axios";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
const { main } = styles;

function Dashboard({onLogout, userID}) {
    const [ turnos, setTurnos ] = useState([]);
    const[ user, setUser ] = useState({});

const navigate = useNavigate();
const isAutentic = sessionStorage.getItem("isAutentic");
const isAutenticNumber = parseInt(isAutentic, 10);

    useEffect(()=>{
        if(!isAutentic) {
            navigate("/login");
            console.log(userID);
        } else {
            const URL = `http://localhost:3000/users/${isAutenticNumber}`;
            axios.get(URL).then(resp=>{
                setTurnos(resp.data.appointments);
                setUser(resp.data);
            }).catch(err=>{
                alert("me rompi!")
            });
        }
    },[]);

    return(
        <div className="container">
            <div className="row">
                <SideBar/>
                <div className={`col-9 ${main}`}>
                    <Turns turnos={turnos} name={user.name}/>
                </div>
            </div>
        </div>
    )    
}

export default Dashboard;