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



const App = () => {
  return (

        <div className = 'app_wraper_content'>
    <div className = "app-wraper">
      <Header />
      <Nav />
      <Route path='/profile' render={()=><Profile />} />

      <Route path='/dialogs' render={()=><Dialog />} />

      <Route path='/news' render={()=><News />} />
      <Route path='/music' render={()=><Music />} />
      <Route path='/settings' render={()=> <Settings />} />
      </div>
    </div>

  );
}

export default App;
