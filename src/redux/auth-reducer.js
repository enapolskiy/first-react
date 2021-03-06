import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                    ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export  const setUserData = (id, login, email) => ({type:SET_USER_DATA, data: {id,login, email}
})
export  const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then (response => {

            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserData (id, login, email));
            }
        });
}
export  default authReducer;