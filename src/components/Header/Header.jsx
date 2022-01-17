import  "./Header";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className="header">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png"
        ></img>
        <div className={classes.loginBlock}> {props.isAuth ? props.login
            : <NavLink to={'/login'}>login</NavLink> }
        </div>
      </header>
}
export default Header;