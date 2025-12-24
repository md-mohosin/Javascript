function validation(){
    const inputObj = document.getElementById("id1")

    if(inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity("You have made a range over flow error")
    }
    else if(inputObj.validity.rangeUnderflow){
        inputObj.setCustomValidity("You have made a range under flow error")
    }

    if(!inputObj.checkValidity()){
        document.getElementById('demo').innerHTML = inputObj.validationMessage;
    }
}