import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";


let _callsubscriber =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App state={state}
                 store={store}
                 dispatch={store.dispatch.bind(store)}
                 />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

_callsubscriber(store.getState());
store.subscribe(() =>{
    let state = store.getState();
    _callsubscriber(state)
})
// store.subscribe (_callsubscriber)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
