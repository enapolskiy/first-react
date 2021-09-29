import classes from './Post.module.css'


const Post = (props) => {
    return (
    <div className = {classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnjGpU0x2WIAu5kxe0Fi5QlaLQ-93DlalfzMHtashUXRSWio79QAfCnUOW3UDQ37vjQc&usqp=CAU" alt="" />
            { props.message } 
           
            <div>
              { props.likeCount }
            </div>

          </div>
         
          )
}
export default Post;