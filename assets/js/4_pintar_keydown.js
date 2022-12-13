var caja1 = document.querySelector("#caja1")
var caja2 = document.querySelector("#caja2")
var caja3 = document.querySelector("#caja3")
var caja4 = document.querySelector("#caja4")
var color = ""

caja1.addEventListener("click", function(){
            caja1.style.backgroundColor = color
        })
caja2.addEventListener("click", function(){
            caja2.style.backgroundColor = color
        })
caja3.addEventListener("click", function(){
            caja3.style.backgroundColor = color
        })
caja4.addEventListener("click", function(){
            caja4.style.backgroundColor = color
        })

document.addEventListener("keydown", function(event) {
    if (event.key === "a"){
        color = "blue"
    } else if (event.key === "s"){
        color = "purple"
    } else if (event.key === "d"){
        color = "orange"
    }
})


