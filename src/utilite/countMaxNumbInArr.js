export default function(arr){
    let res = (arr[0])?arr[0].id: -1;
    arr.forEach(element => {
        if(res < element.id) { res = element.id}; 
    });
    return ++res;
}
