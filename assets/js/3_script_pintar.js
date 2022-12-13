//funcion base
function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }

ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

//funcion modificada
let ele2 = document.querySelector("#ele2")
ele2.addEventListener("click", function(){
    ele2.style.backgroundColor = "yellow"
})

//Funcion con argumento
ele3 = document.querySelector("#ele3")

function amarilla(color){
    ele3.style.backgroundColor = color
}

ele3.addEventListener("click", function(){
    ele3.style.backgroundColor = "yellow"
})

amarilla("green")

    