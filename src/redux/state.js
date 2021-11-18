
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let store ={

    _state: {
        profilePage : {
            posts : [
                {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
                {id:2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
            ],
            newPostText:""
        },
        dialogsPage : {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Jenya"},
                {id: 3, name: "Sonya"},
                {id: 4, name: "Yarik"}
            ],
            messages: [
                {id: 1, messageDialog: "Hi!"},
                {id: 2, messageDialog: "Hello!"},
                {id: 3, messageDialog: "Goog morning!"},
                {id: 4, messageDialog: "Hello!!!!"}
            ],
            messageText:""

        }

    },
    _callsubscrible  ()  {
        console.log("kkkkkk")
    },
    subscribe (observer) {
        this._callsubscrible = observer;

    },
    getState () {
        return this._state
    },
    // addPost ()  {
    //     let newPost = {
    //         id:1,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //      this._state.profilePage.posts.push (newPost)
    //      this._state.profilePage.newPostText= '';
    //      this._callsubscrible(this._state)
    // },
    // updateNewPostText (newText)  {
    //
    //      this._state.profilePage.newPostText = newText
    //      this._callsubscrible(this._state)
    // },
    // addMessage  ()  {
    //     let newMessage = {
    //         id:1,
    //         messageDialog:this._state.dialogsPage.messageText
    //     }
    //      this._state.dialogsPage.messages.push(newMessage)
    //      this._state.dialogsPage.messageText = ""
    //      this._callsubscrible(this._state)
    // },
    // updateMessageText (newText)  {
    //     this._state.dialogsPage.messageText=newText;
    //     this._callsubscrible(this._state)
    // },
    dispatch (action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id:1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push (newPost)
            this._state.profilePage.newPostText= '';
            this._callsubscrible(this._state)
        }
        else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callsubscrible(this._state)
        }

        if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id:1,
                messageDialog:this._state.dialogsPage.messageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.messageText = ""
            this._callsubscrible(this._state)
        }
        else  if (action.type === 'UPDATE_MESSAGE_TEXT') {
            this._state.dialogsPage.messageText=action.newText;
            this._callsubscrible(this._state)
        }
    },
}
export    const addPostActionCreator = () => ({type:'ADD_POST'})
export const updateNewPostTextActionCreator = (text) => ({type:'UPDATE_NEW_POST_TEXT', newText:text})
export const addMessageActionCreator = () => ({ type: 'ADD_MESSAGE'})
export const updateMessageActionCreator = (textmes) => ({type: 'UPDATE_MESSAGE_TEXT', newText: textmes})






window.store=store;
export default store;