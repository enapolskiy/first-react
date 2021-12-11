import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";



    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
            <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

// _callsubscriber(store.getState());
// store.subscribe(() =>{
//     let state = store.getState();
//     _callsubscriber(state)
// })



reportWebVitals();
