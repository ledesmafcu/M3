import React from 'react';
import styles from './Location.module.css';

function Location(){
    return(
    <div className={styles.section}>
        <h2>¿Dónde atiendo?</h2>
        <p>Atiendo en el Hospital Garrahan y en mi consultorio. Dirigite a la parte de “turnos” para pedir el tuyo.</p>
    </div>
    )
}

export default Location;
