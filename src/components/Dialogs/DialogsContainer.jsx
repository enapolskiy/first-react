import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import{addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./DIalogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (textmes) => {
        let action = updateMessageActionCreator(textmes);
        props.store.dispatch(action);

    }

    return (
        <Dialogs
            updateMessage={onMessageChange}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            messageText={state.dialogsPage.messageText}
        />
    )

}
export default DialogsContainer;