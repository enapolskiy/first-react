import Dialogs from "./DIalogs";
import {updateMessageText} from "../../redux/state";

const Dialog = (props) => {
    return (
        <div>
            <Dialogs  dialogs={props.dialogsPage.dialogs}
                      messages={props.dialogsPage.messages}
                      addMessage={props.addMessage}
            messageText={props.dialogsPage.messageText}
                      updateMessageText={props.updateMessageText}/>
        </div>
    )
}
export default Dialog;