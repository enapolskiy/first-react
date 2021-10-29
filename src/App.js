import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/DIalogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {



  return (
      <BrowserRouter>
        <div className = 'app_wraper_content'>
    <div className = "app-wraper">
      <Header />
      <Nav />
      <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}
                                                  updateNewPostText={props.updateNewPostText}
                                                  addPost={props.addPost} />} />
      <Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} state={props.state.dialogsPage} />} />
      <Route path='/news' render={()=><News />} />
      <Route path='/music' render={()=><Music />} />
      <Route path='/settings' render={()=> <Settings />} />
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
