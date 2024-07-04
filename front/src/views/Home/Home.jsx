import { useNavigate } from "react-router-dom";
import Login from "../../components/Login/Login";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Home.module.css";
import { useEffect } from "react";
const { main } = styles;

// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({ userId, handleLogin }) {
    const navigate = useNavigate();

    //RETOMAR CUANDO VEAMOS REDUX
    useEffect(()=>{
        if(userId) navigate("/dashboard");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <div className="container">
            <div className="row">
                <SideBar/>
                <div className={`col-9 ${main}`}>
                    <Login title="Login" handleLogin={handleLogin}/>
                    <hr />
                </div>
                <div>
                    <small>Register</small>
                </div>
            </div>
        </div>
    )    
}

export default Home;