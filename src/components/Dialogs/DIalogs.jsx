import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Sergey
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                   Viktor
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi!
                </div>
                <div className={classes.message}>
                    How are you?
                </div>
                <div className={classes.message}>
                   Yo!
                </div>
                <div className={classes.message}>
                    Hello my name is Viktor!
                </div>

            </div>
        </div>
    )
}
export default Dialogs;