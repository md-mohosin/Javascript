function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

document.getElementById('makeRed').onclick = makeRed
function makeRed() {
    document.body.style.backgroundColor = 'red'
}


const makePnurple = document.getElementById('makePurple')
makePnurple.addEventListener("click",purple)
function purple(){
    document.body.style.backgroundColor='purple'
}


const makePink = document.getElementById("makePink")
makePink.addEventListener("click", function () {
    document.body.style.backgroundColor = 'pink'
})


document.getElementById('makeBlue').addEventListener("mouseover",function(){
    document.body.style.backgroundColor='blue'
})


document.getElementById("text").addEventListener("click",function(){
    document.getElementById("text").innerText='Change by JS'
})


document.getElementById("add").addEventListener("click",function(){
    
    const value = document.getElementById("input-value").value;

    document.getElementById("default-text").innerText = value
})