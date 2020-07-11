const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yewwww' },
        { id: 5, message: 'HAllooooo' },
    ],
    dialogs: [
        { id: 1, name: 'Pasha' },
        { id: 2, name: 'Mitya' },
        { id: 3, name: 'Tolik' },
        { id: 4, name: 'Sanya' },
        { id: 5, name: 'Vlad' },
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }] //Тоже самое что stateCopy.messages.push({id: 6, message: body})
            }

        default:
            return state;
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;