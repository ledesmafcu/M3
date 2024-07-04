import styles from "./SideBar.module.css";
import logo from "../../assets/calendar-update.png";
const { sideBar, logoContainer, bigLogo, titleLog } = styles;

function SideBar() {
    return(
        <div className={`col-3 ${sideBar}`}>
            <div className={logoContainer}>
                <img className={bigLogo} src={logo} alt="Logo" />
                <h1 className={titleLog}>Turnos</h1>
            </div>
        </div>
    )    
}

export default SideBar;