import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let postItem = [
        {id: 1, message: "Hi! how are you", likeCount: "Like 20"},
        {id: 2, message: "Its my first post!", likeCount: "Like 10"}
    ]
    let postData = postItem.map(posts=> <Post message={posts.message} likeCount={posts.likeCount} />)
    return (
        <div>
            My posts
            {postData}
            {/*<Post message="Hi! how are you" likeCount="Like 20"/>*/}
            {/*<Post message="Its my first post!" likeCount="Like 5"/>*/}
        </div>)

}
export default MyPosts;