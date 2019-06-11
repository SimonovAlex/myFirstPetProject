import {Open_Dialog_Window, Close_Dialog_Window, Save_Data_Dialog_Window, Change_Name_Link, Change_Link} from "../actionTypes/actionTypesDialog";


export const openDialog = () =>{
    return{
        type: Open_Dialog_Window,
        payload: true
    };
};

export const closeDialog = () =>{
    return{
        type: Close_Dialog_Window,
        payload: false
    };
};

export const saveDialog = (obj) =>{
    return{
        type: Save_Data_Dialog_Window,
        payload: obj,
    }
};

export const changeNameLink = (newName) =>{
    return{
        type: Change_Name_Link,
        payload: newName,
    }
}

export const changeLink = (newLink) =>{
    return{
        type: Change_Link,
        payload: newLink,
    }
}