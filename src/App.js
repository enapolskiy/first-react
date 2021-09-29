import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/DIalogs";


function App() {
  return (
    <div className="app-wraper">
      <Header />
      <Nav />
      {/*<Profile />*/}
      <div className='app_wraper_content'>
      <Profile />
      </div>
    </div>
  );
}

export default App;
