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




const App = () => {
  return (

        <div className = 'app_wraper_content'>
    <div className = "app-wraper">
      <Header />
      <Nav />
      <Route path='/profile' render={()=><ProfileContainer />} />

      <Route path='/dialogs' render={()=><Dialog />} />

      <Route path='/users' render={()=><UsersContainer />} />
      <Route path='/news' render={()=><News />} />
      <Route path='/music' render={()=><Music />} />
      <Route path='/settings' render={()=> <Settings />} />
      </div>
    </div>

  );
}

export default App;
