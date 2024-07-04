import React from 'react';
import styles from './Biog.module.css';

function Biog(){
    return(
        <div className={styles.section}>
            <h2>Dra Ferraggine</h2>
            <p><strong>¿Quién soy?</strong></p>
            <p>Soy médica pediatra recibida de la Universidad de Buenos Aires. Actualmente me encuentro terminando la residencia de pediatría en el Hospital Garrahan.</p>
        </div>
    )
};

export default Biog;
