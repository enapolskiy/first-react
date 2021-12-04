import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";


let _callsubscriber =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
            <App
                // state={state}
                //  store={store}
                //  dispatch={store.dispatch.bind(store)}
                 />
                </StoreContext.Provider>
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



reportWebVitals();
