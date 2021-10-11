import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Writers = (props) => {
    let path = /dialogs/ + props.id;
    return(
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Jenya"},
    {id: 3, name: "Sonya"},
    {id: 4, name: "Yarik"}
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello!"},
    {id: 3, message: "Goog morning!"},
    {id: 4, message: "Hello!!!!"}
];

let WriterItem = dialogs.map(writer =><Writers name={writer.name} id={writer.id} />)
let MessageItem = messages.map(mes =><Messages message={mes.message} id={mes.id} />)
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              {WriterItem}
          </div>
            <div className={classes.messages}>
                {MessageItem}
            </div>

        </div>
    )
}
export default Dialogs;