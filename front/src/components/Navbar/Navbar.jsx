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
            <a className={navLink} href="#">
                {/* <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/> */}
                Inicio 
            </a>
            <Link className={navLink} to="/schedule">
                Turnos
            </Link>
            <Link className={navLink} to="/about">
                Contacto
            </Link>
            <a className={navLink} href="#" onClick={onLogout}>
                Cerrar sesión
            </a>
        </nav>
    )
}

export default Navbar;