const sections = document.querySelectorAll('section')
for (const section of sections) {
    section.style.border = '2px solid red'
    section.style.marginBottom = '10px'
    section.style.borderRadius = '10px'
    section.style.padding = '10px'
}


document.getElementById('jalali').style.backgroundColor = 'green'

document.getElementById('shafayet').classList.remove('bg-color')