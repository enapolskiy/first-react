import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import store from "../../../redux/store";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/DIalogs";


// const MyPostsContainer = () => {
//
// debugger
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//                 }
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     posts={state.profilePage.posts}
//                                     newPostText={state.profilePage.newPostText}
//                     />
//                 }
//             }
//                 </StoreContext.Consumer>
//                 )
//
//             }
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            store.dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;