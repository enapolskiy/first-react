const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
        {id:2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
    ],
    newPostText:''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                message: stateCopy.newPostText,
                likeCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = "";
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
          return {
              ...state,
              newPostText : action.newText
          }
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text })
export  default profileReducer;