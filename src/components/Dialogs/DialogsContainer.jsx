import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import{addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./DIalogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState();
//
//             let addMessage = () => {
//                 store.dispatch(addMessageActionCreator());
//             }
//
//             let onMessageChange = (textmes) => {
//                 let action = updateMessageActionCreator(textmes);
//                 store.dispatch(action);
//             }
//
//             return <Dialogs
//                 //updateMessage={onMessageChange}
//                 addMessage={addMessage}
//                 onMessageChange={onMessageChange}
//                 dialogs={state.dialogsPage.dialogs}
//                 messages={state.dialogsPage.messages}
//                 messageText={state.dialogsPage.messageText}
//             />
//         }
//     }
//     </StoreContext.Consumer>
//
// }
// export default DialogsContainer;

let mapStateToProps = (state) => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageText: state.dialogsPage.messageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
     addMessage : () => {
            dispatch(addMessageActionCreator());
        },

        updateMessage : (textmes) => {
         let action = updateMessageActionCreator(textmes)
         dispatch(action)
        }
 }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);
export default  DialogsContainer;