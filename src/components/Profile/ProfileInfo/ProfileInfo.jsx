import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    className="main_img"
                    src="https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg&ga=GA1.2.2103811857.1630281600"></img>
            </div>
            <div className={classes.contentDeskription}>
                ava+description
            </div>
        </div>)
}
export default ProfileInfo;