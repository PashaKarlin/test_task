import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from '../Friends/Friends'

const NavBar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName = {styles.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item} >
        <NavLink to = '/dialogs'  activeClassName = {styles.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <a>Settings</a>
      </div>
      <h3>
        <Friends state = {props.state}/>
      </h3>
    </nav>
  );
}

export default NavBar;