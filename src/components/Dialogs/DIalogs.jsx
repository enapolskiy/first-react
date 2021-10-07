import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/ +props.id";

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

    return (
        <div className={classes.dialogs}>
          <div classNme={classes.dialogsItem}>
              <DialogItem name="Dimych" id="1"/>
              <DialogItem name="Sanya" id="2"/>
              <DialogItem name="Sonya" id="3"/>
              <DialogItem name="Yarik" id="4"/>
          </div>
            <div className={classes.messages}>
                <Message message="Hi!" />
                <Message message="Hello!" />
                <Message message="Good morning!" />
                <Message message="Good day!" />
            </div>

        </div>
    )
}
export default Dialogs;