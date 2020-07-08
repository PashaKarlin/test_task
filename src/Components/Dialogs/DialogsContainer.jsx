import React from 'react' 
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let newMessageBody = state.newMessageBody
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let newMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (<Dialogs sendMessage={sendMessage} 
        newMessageChange={newMessageChange} 
        newMessageBody={newMessageBody} 
        dialogsPage={state}/>)
}

export default DialogsContainer;