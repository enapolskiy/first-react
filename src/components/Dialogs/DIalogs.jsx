import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



<DialogItem />;
<Message />;
// let WriterItem = props.dialogs.map(writer =><DialogItem name={writer.name} id={writer.id} />)
// let MessageItem = messages.map(mes =><Message message={mes.message} id={mes.id} />)
const Dialogs = (props) => {
    let WriterItem = props.state.dialogs.map(writer =><DialogItem name={writer.name} id={writer.id} />)
    let MessageItem = props.state.messages.map(mes =><Message message={mes.messageDialog} id={mes.id} />)


let newMessageElement=React.createRef();

let addMessage = () => {
        let textMessage = newMessageElement.current.value;
        props.addMessage(textMessage)
}
let onChangeMessage = () =>{

}
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
                    <textarea onChange={onChangeMessage} ref={newMessageElement} value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>

        </div>
    )

}
export default Dialogs;