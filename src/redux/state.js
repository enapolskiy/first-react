
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
    addMessage  ()  {
        let newMessage = {
            id:1,
            messageDialog:this._state.dialogsPage.messageText
        }
         this._state.dialogsPage.messages.push(newMessage)
         this._state.dialogsPage.messageText = ""
         this._callsubscrible(this._state)
    },
    updateMessageText (newText)  {
        this._state.dialogsPage.messageText=newText;
        this._callsubscrible(this._state)
    },
    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id:1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push (newPost)
            this._state.profilePage.newPostText= '';
            this._callsubscrible(this._state)
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callsubscrible(this._state)
        }

    }
}





window.store=store;
export default store;