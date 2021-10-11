
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = (props) => {
    return (
    <div className={classes.content}>
        <div>
          <img
            className="main_img"
            src="https://img1.akspic.ru/originals/5/1/7/0/80715-struktura-materinskaya_plata-elektronika-elektronnaya_shema-tekst-1920x1080.jpg"></img>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </div>)
}
export default Profile;