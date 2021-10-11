
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = (props) => {
    return (
    <div className={classes.content}>
        <div>
          <img
            className="main_img"
            src="https://cs7.pikabu.ru/post_img/big/2014/07/03/0/1404332732_1301108742.jpg"></img>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>)
}
export default Profile;