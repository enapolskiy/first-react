import classes from './ProfileInfo.module.css';
import Preloader from "../../CommonFiles/Preloader/Preloader";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.content}>
            <div>
                <img
                    className={classes.mainImg}
                    src={'https://ecocity.md/wp-content/uploads/2015/11/%D0%A3%D0%B7%D0%BA%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0-%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B9.jpg'}
                   />
                 </div>
            <div className={classes.contentDeskription}>
                <img src={props.profile.photos?.large} />
                ava+description
            </div>
        </div>)
}
export default ProfileInfo;