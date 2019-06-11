import redirect from "./redirect";

function check(user, allowedArr ){
    let res = false;
    allowedArr.forEach((item) =>{
        if(item === user){
            res = true;
        }
        return res;
    });
    return res;
}

export default function(user, allowedArr,banned){
    if(banned){
        redirect('/ban');
    }
    else{
        if(!check(user,allowedArr)){
            redirect('/');
        }
    }
}


//this function check access level user