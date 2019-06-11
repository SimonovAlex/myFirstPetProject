import axios from "axios";
import {Fetch_POST_Success, Fetch_POST_Fail,Fetch_GET_Success ,Fetch_GET_Fail} from "../actionTypes/actionTypes";

export const sendDataToBE = (url, data) =>{
    return function (dispatch) {
        axios.post(url, data)
            .then((response) => dispatch({
                type: Fetch_POST_Success,
                payload: response.data
            }))

    }
};

export const getDataForBE = (url) =>{
    return function (dispatch) {
        axios.get(url)
            .then((response) => dispatch({
                type: Fetch_GET_Success,
                data: response.data
            })).catch((response) => dispatch({
                type: Fetch_GET_Fail,
                error: response.error
        }))
    }
};