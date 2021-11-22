import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postElement =props.posts.map(post =><Post message={post.message} likeCount={post.likeCount} id={post.id} />)
    let newPostElement = React.createRef();

    let addPost =()=>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = ()=>{
        let text=newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
    <div>
        <h3 className={classes.text}> My posts </h3>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}  className={classes.textarea}></textarea>
        </div>
        <div>
            <button className={classes.button} onClick={addPost}>Add post</button>
        </div>
        {postElement}
        </div>)
      
}
export default MyPosts;