import {Change_Email, Change_Password} from "../actionTypes/actionTypesLogin";

const initialState = {
    email:'',
    password:'',
};

const loginReducer = (state=initialState, action) =>{
    switch (action.type) {
        case Change_Email:
            return {...state, email: action.payload};

        case Change_Password:
            return {...state, password: action.payload};

        default:
            return state;
    }
};

export default loginReducer;
