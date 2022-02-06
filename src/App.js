import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/login";




const App = () => {
  return (

        <div className = 'app_wraper_content'>
    <div className = "app-wraper">
      <HeaderContainer />
      <Nav />
      <Route path='/profile/:userId?' render={()=><ProfileContainer />} />

      <Route path='/dialogs' render={()=><Dialog />} />
      <Route path='/users' render={()=><UsersContainer />} />
      <Route path='/news' render={()=><News />} />
      <Route path='/music' render={()=><Music />} />
      <Route path='/settings' render={()=> <Settings />} />
      <Route path='/login' render={()=> <LoginPage />} />
      </div>
    </div>

  );
}

export default App;
