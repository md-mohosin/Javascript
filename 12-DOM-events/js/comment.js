document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault()
    const comment = document.getElementById("comment").value;
    const p = document.createElement("p")
    p.innerText = comment
    if(!comment.trim()){
        document.getElementById("error").innerText = 'Please write a valid commet'
        return
    }
    document.getElementById("container").appendChild(p)
    document.getElementById("comment").value = ''
    document.getElementById("error").innerText =''
})