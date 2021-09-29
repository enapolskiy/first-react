
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = (props) => {
    return (
    <div className={classes.content}>
        <div>
          <img
            className="main_img"
            src="https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg&ga=GA1.2.2103811857.1630281600"></img>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>)
}
export default Profile;