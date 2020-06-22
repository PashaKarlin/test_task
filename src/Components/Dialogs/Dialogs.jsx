import React from 'react'
import styles from './Dialogs.module.css'
import Message from './MessageComponent/Message'
import DialogItem from './DialogComponent/DialogItem'


const Dialogs = (props) => {

    let dialogsItems = props.dialogs.map(person => <DialogItem name={person.name} id={person.id} />)

    let messageItems = props.messages.map(element => <Message message={element.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;