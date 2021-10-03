import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
          <div className={classes.dialogsItem}>
              <div className={classes.dialog + ' ' + classes.active}>
                  Dimysh
              </div>
              <div className={classes.dialog}>
                  Sanya
              </div>
              <div className={classes.dialog}>
                  Sonya
              </div>
              <div className={classes.dialog}>
                  Yarik
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