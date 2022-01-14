const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
    posts : [
        {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
        {id:2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
    ],
    newPostText:'',
    profile: null
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
                newPostText: action.newText
            }
        }
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        case SET_USER_PROFILE: {
                return {
                    ...state,
                    profile: action.profile
                }
            }

        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type:ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export  default profileReducer;