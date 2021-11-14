import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        posts : [
            {id:1, message:"Hi! my name is Alex!", likeCount:"likes 12"},
            {id:2, message: "Hi! Alex! How are you?", likeCount:"likes 2"}
        ],
        newPostText:"gggggggg"
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

}
window.state=state;
export let addPost =() => {
    let newPost = {
        id:1,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push (newPost)
    state.profilePage.newPostText= '';
    rerenderEntireTree(state)
}
export let updateNewPostText =(newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
///////////////////////////////////////////////////
export let addMessage = () => {
    let newMessage = {
        id:1,
        messageDialog:state.dialogsPage.messageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.messageText = ""
    rerenderEntireTree(state)
}
export let updateMessageText = (newText) => {
    state.dialogsPage.messageText=newText;
    rerenderEntireTree(state)
}




export default state;