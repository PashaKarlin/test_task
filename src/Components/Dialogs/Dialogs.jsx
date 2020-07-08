import React from 'react'
import styles from './Dialogs.module.css'
import Message from './MessageComponent/Message'
import DialogItem from './DialogComponent/DialogItem'



const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogs.map(person => <DialogItem name={person.name} id={person.id} />)

    let messageItems = props.dialogsPage.messages.map(element => <Message message={element.message} />)

    let onSendMessage = () => {
        props.sendMessage()
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.newMessageChange(body)
    }
    

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                <div>{messageItems}</div>
                <div>
                    <div>
                        <textarea 
                            value={props.newMessageBody} 
                            placeholder='Enter your message' 
                            onChange ={onNewMessageChange}/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;