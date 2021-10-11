
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {
    let posts = [
        {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
        {id: 2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
    ]
    let postElement =posts.map(post =><Post message={post.message} likeCount={post.likeCount} id={post.id} />)
    return (
    <div>
          My posts
        {postElement}
        </div>)
      
}
export default MyPosts;