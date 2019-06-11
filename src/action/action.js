// actionsForLinks.
import axios from "axios";
import {Get_Data_Links} from "../actionTypes/actionTypesCutaway";


export const getDataLinksForCutaway = (link) =>{
    return function (dispatch) {
        axios.get(link)
            .then((response) => dispatch({
                type: Get_Data_Links,
                payload: response.data
            }))
            .catch((response) => console.error(response))
    }
};

