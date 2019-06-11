import {Click_BTN_login} from "../actionTypes/actionTypesLogin";
import {Open_Dialog_Window,Close_Dialog_Window,Save_Data_Dialog_Window,Change_Name_Link,Change_Link} from "../actionTypes/actionTypesDialog";
import {Remouve_Link_Actions, Edit_Link_Actions} from "../actionTypes/actionTypesForLinks";
import countMaxNumbInArr from '../utilite/countMaxNumbInArr';

const initialState = {
    name:'',
    serName:'',
    loggedIn:false,

    cutawayHTTP:'https:/vk.com',

    openDialog:false,
    editableLink:false,
    newLink:{name:'',link:''},
    idCounter : 0,
    links:[
        {name:'vk1', link:'https:/vk.com1', id:1},
        {name:'vk1', link:'https:/vk.com2', id:2},
        {name:'vk1', link:'https:/vk.com3', id:3},
    ],
};

const loginReducer = (state=initialState, action) =>{
    let tmpLinksArr = state.links;
    let tmpNewLinkObj = state.newLink;
    let idCount = countMaxNumbInArr(state.links);
    // let editableLink = state.editableLink;

    switch (action.type) {
        case Open_Dialog_Window:
            {
                return {...state, openDialog: action.payload};
            } 

        case Close_Dialog_Window:
           {
               return {...state, openDialog: action.payload,newLink:{name:'',link:''}};
            }

        case Save_Data_Dialog_Window:
            {   
                if(!state.editableLink){
                    let actionTmp = JSON.stringify(action.payload);
                    let actionPayload = JSON.parse(actionTmp);
                    tmpLinksArr.push(actionPayload);
                }
                return {...state, links: tmpLinksArr, openDialog: false, newLink:{name:'',link:''}, editableLink : false, idCounter: idCount};
            }

        case Change_Name_Link:
           { 
                tmpNewLinkObj.name = action.payload;
                tmpNewLinkObj.id = idCount;
                return {...state, newLink : tmpNewLinkObj}
            }

        case Change_Link:
            {   
                tmpNewLinkObj.link = action.payload;
                tmpNewLinkObj.id = idCount;
                return {...state, newLink : tmpNewLinkObj}
            }

        case Remouve_Link_Actions: 
            {
                let newLinks = state.links.filter((link) => link.id !== action.payload.id );
                return {...state, links : newLinks};
            }

        case Edit_Link_Actions:
            {
                return {...state, openDialog:true, newLink:action.payload ,editableLink : true}
            }

        case Click_BTN_login:
        {
            return {...state, ...action.payload}
        }

        default:
            return state;

            

    }
};

export default loginReducer;
