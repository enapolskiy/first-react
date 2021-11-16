import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";


let _callsubscrible =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

_callsubscrible(store.getState());
store.subscribe (_callsubscrible)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
