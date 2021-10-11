
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (
    <div>
          My posts
        <Post message = "Hi! how are you" likeCount = "Like 20"/>
        <Post message = "Its my first post!" likeCount = "Like 5"/>
        </div>)
      
}
export default MyPosts;