import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
    {id: 2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
];

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Jenya"},
    {id: 3, name: "Sonya"},
    {id: 4, name: "Yarik"}
];

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello!"},
    {id: 3, message: "Goog morning!"},
    {id: 4, message: "Hello!!!!"}
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
