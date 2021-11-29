import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from "./components/Dialogs/Dialog";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import store from "./redux/redux-store";



function App(props) {
  return (

        <div className = 'app_wraper_content'>
    <div className = "app-wraper">
      <Header />
      <Nav />
      <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}
                                                  store={props.store}/>} />

      <Route path='/dialogs' render={()=><Dialog dialogsPage={props.state.dialogsPage}
                                                 dispatch={props.dispatch}
                                                 store={props.store}/>} />

      <Route path='/news' render={()=><News />} />
      <Route path='/music' render={()=><Music />} />
      <Route path='/settings' render={()=> <Settings />} />
      </div>
    </div>

  );
}

export default App;
