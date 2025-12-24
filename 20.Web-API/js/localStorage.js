function setLocalStorage(key,value){
    localStorage.setItem(key,value)
}

function getLocalStorage(key){
    alert(localStorage.getItem(key))
}

function remveLocalStorage(key){
localStorage.removeItem(key)
}

function clearLocalStorage(){
localStorage.clear()
}