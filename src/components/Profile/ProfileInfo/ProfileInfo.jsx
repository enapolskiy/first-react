import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    className={classes.mainImg}
                    src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png?__cf_chl_jschl_tk__=pmd_psgdcZn4DOQniMZ1Y9xfANpFWR4..cgHood3KVYKnfI-1635854219-0-gqNtZGzNAnujcnBszQhl"/>
                 </div>
            <div className={classes.contentDeskription}>
                ava+description
            </div>
        </div>)
}
export default ProfileInfo;