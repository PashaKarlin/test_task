import React from 'react'
import styles from './Friend.module.css'


const Friend = (props) => {
    return(
        <div className = {styles.friendItem}>
            <img src = {props.src} className = {styles.image} alt = {props.alt}/>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend;