import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";


export let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}