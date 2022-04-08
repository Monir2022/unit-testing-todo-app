export default  function validatePrice (number) {

    const parsedNumber = Number(number.trim());
    let data = " ";
    let error = " ";

    if(parsedNumber > 0){
        data= parsedNumber;
        error = " ";
    } else {
        data = " ";
        error = "Price must be getter than zero"
    }

    return { data: data, error: error };
}