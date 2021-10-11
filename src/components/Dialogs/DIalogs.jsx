import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = /dialogs/ + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
return (
    <div className={classes.message}>{props.message}</div>
)
}

const Dialogs = (props) => {
    let dialogs = [
        {id:1, name:"Dimysh"},
        {id:2, name:"Sanya"},
        {id:3, name:"Sonya"},
        {id:4, name:"Yarik"}
    ]
    let messages = [
        {id:1, message:"Hi!"},
        {id:2, message:" Hello!!"},
        {id:3, message:"Good morning!"},
        {id:4, message:"Good afternoon!"}
    ]
    let dialogsElement = dialogs.map (d => <DialogsItem name={d.name} id={d.id} /> )
    let messageElement = messages.map (m => <Message message={m.message} id={m.id} /> )

return (

    <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            {dialogsElement}
        </div>
        <div className={classes.messages}>
            {messageElement}
        </div>

    </div>
)
}
export default Dialogs;