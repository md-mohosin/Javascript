const placesList = document.getElementById('places')

const li = document.createElement("li")
li.innerText = 'moynamoti'

placesList.appendChild(li)






const mainContainer = document.getElementById('main-container')

const section = document.createElement("section")

const h1 = document.createElement("h1")
h1.innerText = 'Our Fashion'
section.appendChild(h1)

const ul = document.createElement("ul")

const li1 = document.createElement("li")
li1.innerText = 'Shirt'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Panjabi'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Pant'
ul.appendChild(li3)

section.appendChild(ul)

mainContainer.appendChild(section)








const playerSection = document.createElement("section")

playerSection.innerHTML = `
<h1> Our Player</h1>
<ul>
    <li>Babar Azam</li>
    <li>Muhammad Rizwan</li>
    <li>Fakhar zaman</li>
    <li>Saheen Afridi</li>
</ul>
`

mainContainer.appendChild(playerSection)