AOS.init()

let menu = document.querySelector('#menu')
let bars = document.querySelector('#bars')

bars.addEventListner('click', function (){ 
    menu.classList.toogle('mobilemenu')
})

let swiper = new swiper('.myswiper', {
    navigation:{
        nextE1:'.next',
        prevE1:'.prev',
        autoplay:'.true',
    },
})

let headings = document.querySelectorAll('#info')
heading.forEach((item) => {

    item.addEventListner('click', () => {
        let para = item.nextElementsibling
        para.classList.toogle('active')
    })
})

let checkout = document.querySelector('#checkout')
let from2 = document.querySelector('#from2')

checkbox.addEventListner('click', () => {
    if (checkbox){
        from2.style.display = 'block'
    } else {
        from2.style.display = 'none'
    }
})