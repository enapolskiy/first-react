import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              <div className={classes.dialog + ' ' + classes.active}>
                  <NavLink to="/dialogs/1">Dimysh</NavLink>
              </div>
              <div className={classes.dialog}>
                  <NavLink to="/dialogs/2">Sanya</NavLink>
              </div>
              <div className={classes.dialog}>
                  <NavLink to="/dialogs/3">Sonya</NavLink>
              </div>
              <div className={classes.dialog}>
                  <NavLink to="/dialogs/4">Yarik</NavLink>
              </div>
          </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi!
                </div>
                <div className={classes.message}>
                    Hello!
                </div>
                <div className={classes.message}>
                   Good morning
                </div>
                <div className={classes.message}>
                    Good afternoon
                </div>
            </div>

        </div>
    )
}
export default Dialogs;