// eslint-disable react/prop-types 
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const { logoImg, logoText, navbar, navLink } = styles;

function Navbar({onLogout}) {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className={navbar}>
                <img src="../../../../public/logo.svg" alt="Logo" className={logoImg} />
                <h2 className={logoText}>Dra. Ferraggine</h2>
            </div>
            <Link className={navLink} to="/">
                Inicio 
            </Link>
            <Link className={navLink} to="/dashboard">
                Turnos
            </Link>
            <Link className={navLink} to="/contact">
                Contacto
            </Link>
            <a className={navLink} href="#" onClick={onLogout}>
                Cerrar sesión
            </a>
        </nav>
    )
}

export default Navbar;