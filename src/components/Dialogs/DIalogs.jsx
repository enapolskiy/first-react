import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = /dialogs/ +props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:"Dimych"},
        {id:2, name:"Jenya"},
        {id:3, name:"Sonya"},
        {id:4, name:"Yarik"}
    ];

    let messagesData = [
        {id:1, message:"Hi!"},
        {id:2, message:"Hello!"},
        {id:3, message:"Goog morning!"},
        {id:4, message:"Hello!!!!"}
    ];

    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
              <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
              <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

          </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />

            </div>

        </div>
    )
}
export default Dialogs;