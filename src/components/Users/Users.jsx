import classes from "./User.module.css";
import userPhoto from "../../assets/img/yan-blanco-yan-blanco-krysty-krab.jpg"
import * as axios from "axios";

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

                props.setUsers(response.data.items)
            });
        }
    }




    return (
        <div>
            <button onClick={getUsers} className={classes.usersButton}>Get Users</button>
            {props.users.map(u =><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?  <button onClick={() => {props.unfollow (u.id)}}>Unfollow</button>
                                     : <button onClick={() => {props.follow (u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}



export default Users;