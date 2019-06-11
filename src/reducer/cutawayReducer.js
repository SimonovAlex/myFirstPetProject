import {Get_Data_Links} from "../actionTypes/actionTypesCutaway";
// import {Get_Data_Links} from "../actionTypes/actionTypesCutaway";

const initialState = {
    // name: '12',
    // serName:'123',
    // links:[
    //     {name:'vk1', link:'https:/vk.com1', id:1},
    //     {name:'vk1', link:'https:/vk.com2', id:2},
    //     {name:'vk1', link:'https:/vk.com3', id:3},
    // ],
};

const cutawayReducer = (state=initialState, action) =>{
    switch (action.type) {
        case Get_Data_Links:
            return {state:action.pauload}

        default:
            return state;
    }
};

export default cutawayReducer;
