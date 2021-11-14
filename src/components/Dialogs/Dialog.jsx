import Dialogs from "./DIalogs";

const Dialog = (props) => {
    return (
        <div>
            <Dialogs  dialogs={props.dialogsPage.dialogs}
                      messages={props.dialogsPage.messages}
                      addMessage={props.addMessage}/>
        </div>
    )
}
export default Dialog;