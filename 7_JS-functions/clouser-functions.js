function stopWatch(){
    let counter = 0;
    function display(){
       return counter ++
    }
   return display
}

const watch1 = stopWatch()
watch1()
watch1()
console.log('watch1',watch1())





function temporary() {
    let count = 0;
    return function () {
   return  count++
    }
}

const add = temporary()
add()
add()
add()
console.log('add',add())

const add2 = temporary()
add2()
add2()
console.log('add2',add2())


//            “It didn’t finish properly; there’s still more to learn.”*