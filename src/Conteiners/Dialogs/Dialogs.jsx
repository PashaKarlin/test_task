import React from 'react'
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'





const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={path} className={props.className}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={props.className}>{props.message}</div>
    )
}


const Dialogs = () => {
    
    const dialogsData = [
        {id : 1, name: 'Pasha'},
        {id : 2, name: 'Mitya'},
        {id : 3, name: 'Tolik'},
        {id : 4, name: 'Sanya'},
        {id : 5, name: 'Vlad'},
    ]

    const messageData =[
        {id : 1, message: 'Hi'},
        {id : 2, message: 'How are you?'},
        {id : 3, message: 'Yo'},
        {id : 4, message: 'Yewwww'},
        {id : 5, message: 'HAllooooo'},
    ]

    let dialogsItems = dialogsData.map(person => <DialogItem name={person.name} id={person.id} />)

    let messageItems = messageData.map(element => <Message message = {element.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> */}
                {dialogsItems}
            </div>
            <div className={styles.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs;