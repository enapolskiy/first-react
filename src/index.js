import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";
import {updateMessageText} from "./redux/state"
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree =()=> {
    ReactDOM.render(
        <React.StrictMode><BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}  addMessage={addMessage} updateMessageText={updateMessageText}/>
        </BrowserRouter></React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
