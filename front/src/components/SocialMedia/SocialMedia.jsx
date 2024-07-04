import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './SocialMedia.module.css';

function SocialMedia(){
    return(
    <div className={styles.section}>
        <h2>Redes</h2>
        <p>Seguime en las redes para información y tips!</p>
        <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
        </a>
        </div>
    </div>
    )
};

export default SocialMedia;
