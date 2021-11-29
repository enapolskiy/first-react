import Dialogs from "./DIalogs";
import {updateMessageText} from "../../redux/store";
import DialogsContainer from "./DialogsContainer";

const Dialog = (props) => {
    debugger
    return (
        <div>
            <DialogsContainer
                store={props.store}
                // dialogs={props.dialogsPage.dialogs}
                //       messages={props.dialogsPage.messages}
                //       dispatch={props.dispatch}
                //       messageText={props.dialogsPage.messageText}
                      />
        </div>
    )
}
export default Dialog;