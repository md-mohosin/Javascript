const display = document.getElementById("display")

function getData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => display.innerHTML=
        data.map(d => `${d.name}`).join(" ")

    )

    console.log('Hello fetch')
}