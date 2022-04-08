export default function validateName(string){
    const parsedString = string.trim();
    let data = " ";
    let error = " ";
     
    if(parsedString.length> 0){
        data = parsedString;
        error = " "
    } else {
        data = " "
        error = "You need a item name to start"
    }


    return{ data: data, error: error }
}