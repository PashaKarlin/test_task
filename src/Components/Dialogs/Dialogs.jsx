import React from 'react'
import styles from './Dialogs.module.css'
import Message from './MessageComponent/Message'
import DialogItem from './DialogComponent/DialogItem'


const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(person => <DialogItem name={person.name} id={person.id} />)

    let messageItems = props.state.messages.map(element => <Message message={element.message} />)

    let newMessage = React.createRef()

    let sendMessage = () => {
        let currentMessage = newMessage.current.value
        alert(currentMessage)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messageItems}
                <textarea ref={newMessage} />
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;