const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Jenya"},
        {id: 3, name: "Sonya"},
        {id: 4, name: "Yarik"}
    ],
    messages: [
        {id: 1, messageDialog: "Hi!"},
        {id: 2, messageDialog: "Hello!"},
        {id: 3, messageDialog: "Goog morning!"},
        {id: 4, messageDialog: "Hello!!!!"}
    ],
    messageText: ""
};
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                messageDialog: stateCopy.messageText
            }
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.messageText = "";
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            stateCopy.messageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (textmes) => ({type: UPDATE_MESSAGE_TEXT, newText: textmes})
export default dialogsReducer