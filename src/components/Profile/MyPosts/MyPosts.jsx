import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi! my name is Alex!", likeCount:"likes 12"},
        {id: 2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
    ]

    return (
        <div className={classes.content}>
            <h3>My posts</h3>
            <Post message={postData[0].message} likeCount={postData[0].likeCount} />
            <Post message={postData[1].message} likeCount={postData[1].likeCount} />
        </div>)

}
export default MyPosts;