// actionsForLinks.

import {Remouve_Link_Actions, Edit_Link_Actions} from "../actionTypes/actionTypesForLinks";


export const remouveLink = (link) =>{
    return{
        type: Remouve_Link_Actions,
        payload: link
    };
};

export const editLink = (link) =>{
    return {
        type: Edit_Link_Actions,
        payload: link
    };
};

