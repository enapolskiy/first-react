const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 5,
                messageDialog: state.messageText
            }
            state.messages.push(newMessage)
            state.messageText = ""
            return state;
        case 'UPDATE_MESSAGE_TEXT':
            state.messageText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: 'ADD_MESSAGE'})
export const updateMessageActionCreator = (textmes) => ({type: 'UPDATE_MESSAGE_TEXT', newText: textmes})
export  default dialogsReducer