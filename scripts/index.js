

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

    slide()
    landingTimeoutId = setTimeout(landingSlide, 5000)
}


