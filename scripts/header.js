// ------------------------------- nav toggle --------------------------------

const navButton = document.querySelector('#nav-button')
const navPhone = document.querySelector('.nav-phone')
let isNavVisible = false
function toggleNav(){
    isNavVisible = !isNavVisible

    if(isNavVisible){
        navPhone.classList.add('nav-show')
    }else{
        navPhone.classList.remove('nav-show')
    }

}