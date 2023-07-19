

// landing slideshow

let landingSlideshow = document.querySelector('#landing-slideshow>div')
let landingRadioItems = document.getElementsByName('landing')
console.log(landingRadioItems)

// enabling auto slide
let landingTimeoutId = setTimeout(landingAutoSlide, 5000)

let landingSlideIndex = 0
function landingSlide(value = -1){

    landingSlideIndex += 1
    if(value != -1){
        landingSlideIndex = value

        // cancel previous timeout
        clearTimeout(landingTimeoutId)
        landingTimeoutId = setTimeout(landingSlide, 5000)
    }
    if(landingSlideIndex * -100 < (landingSlideshow.children.length - 1) * -100) landingSlideIndex = 0

    // translating
    landingSlideshow.style.translate = `${landingSlideIndex * -100}% 0`;

    // making radio checked
    landingRadioItems[landingSlideIndex].checked = true
    
}



function landingAutoSlide(){

    landingSlide()
    landingTimeoutId = setTimeout(landingAutoSlide, 5000)
}




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

