import {Change_Email, Change_Password,Click_BTN_login} from "../actionTypes/actionTypesLogin";
// import {sendDataToBE} from './requestsActions';
import axios from "axios";
import redirect from "../utilite/redirect";

export const changeEmail = (newLogin) =>{
    return{
        type: Change_Email,
        payload: newLogin
    };
};

export const changePassword = (newPassword) =>{
    return {
        type: Change_Password,
        payload: newPassword
    };
};

// export const LogIn = (data) =>{
//     // let response = sendDataToBE(data);
//     return{
//         type:Click_BTN_login,
//         payload: sendDataToBE('/login',data),
//     }
// };

export const LogIn = (data) =>{
    return function (dispatch) {
        axios.post('/login', data)
            .then((response) => {
            dispatch({
                type: Click_BTN_login,
                payload: response.data
            })
            redirect('/');
        }).catch((response) => console.error(response))
    }
}


