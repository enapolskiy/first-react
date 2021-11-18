import Dialogs from "./DIalogs";
import {updateMessageText} from "../../redux/state";

const Dialog = (props) => {
    return (
        <div>
            <Dialogs  dialogs={props.dialogsPage.dialogs}
                      messages={props.dialogsPage.messages}
                      dispatch={props.dispatch}
                      messageText={props.dialogsPage.messageText}
                      />
        </div>
    )
}
export default Dialog;