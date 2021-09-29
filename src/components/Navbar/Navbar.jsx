
import classes from './Navbar.module.css';
// let classes = {
//   'nav':'Navbar_nav__18Xk8',
//   'item':'Navbar_item__3Mq7y'
// }
const Navbar = () => {
    return <nav className = {classes.nav}>
        <div className = {classes.item}>
          <a href="/profile">Profile</a>
        </div>
        <div className = {classes.item}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className = {classes.item}>
          <a href="">News</a>
        </div>
        <div className = {classes.item}>
          <a href="">Music</a>
        </div>
        <div className = {classes.item}>
          <a href="">Settings</a>
        </div>
      </nav>
}
export default Navbar;