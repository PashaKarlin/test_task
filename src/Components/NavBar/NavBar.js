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
        <NavLink to = '/'  activeClassName = {styles.activeLink}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to = '/'  activeClassName = {styles.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to = '/'  activeClassName = {styles.activeLink}>
        Settings
        </NavLink>
      </div>
      <h3>
        <Friends state = {props.store.getState()}/>
      </h3>
    </nav>
  );
}

export default NavBar;