import React from 'react'
import img1 from '../../img1.png'
import styles from './Header.module.css'


const Header = () =>{
    return(
        <header className = {styles.header}>
            <img src = {img1} alt =''/>
        </header>
    );
}

export default Header;