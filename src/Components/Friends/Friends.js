import React from 'react'
import Friend from './Friend/Friend'
import styles from './Friends.module.css'


const Friends = (props) => {
    const friendsData = props.state.sidebar.friends.map(friend => <Friend name={friend.name} src={friend.src} />)

    return (
        <div className = {styles.friendsBlock}>
            {friendsData}
        </div>
    )
}

export default Friends