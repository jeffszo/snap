let btn = document.getElementById('btn-menu')
let close = document.querySelector('#btn-close')
let menu = document.querySelector('.menu-mobile')
let register = document.querySelector('#register')

menu.style.display = 'none'

btn.addEventListener("click", function(){

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
        
    }
    else if (menu.style.display == 'block'){
        menu.style.display = 'none'

    }
})

close.addEventListener("click", function(){
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }
})


register.addEventListener("click", function(){
    register.style.backgroundColor = 'black'
    register.style.color = 'white'
})