import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import{addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


<DialogItem />;
<Message />;
// let WriterItem = props.dialogs.map(writer =><DialogItem name={writer.name} id={writer.id} />)
// let MessageItem = messages.map(mes =><Message message={mes.message} id={mes.id} />)
const Dialogs = (props) => {

    let WriterItem = props.dialogs.map(writer =><DialogItem name={writer.name} id={writer.id} />)
    let MessageItem = props.messages.map(mes =><Message message={mes.messageDialog} id={mes.id} />)

    let newMessageElement = React.createRef()

  let onAddMessage = () => {
      props.addMessage();
    }

    let onMessageChange = () => {
        let textmes = newMessageElement.current.value;
        props.updateMessage(textmes)
    }

   if (props.isAuth==false) return <Redirect to={"/login"} />

    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              {WriterItem}
          </div>
            <div className={classes.messages}>
                {MessageItem}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.messageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage} >Add Message</button>
                </div>

            </div>

        </div>
    )

}
export default Dialogs;