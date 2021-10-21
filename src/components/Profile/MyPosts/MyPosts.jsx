
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElement =props.posts.map(post =><Post message={post.message} likeCount={post.likeCount} id={post.id} />)
    return (
    <div>
        <h3 className={classes.text}> My posts </h3>
        <div>
        <textarea className={classes.textarea}></textarea>
        </div>
        <div>
            <button className={classes.button}>Add post</button>
        </div>
        {postElement}
        </div>)
      
}
export default MyPosts;