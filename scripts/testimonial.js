// testimonial slideshow

let testimonialSlideshow = document.querySelector('.testimonial-holder')
let testimonialRadioItems = document.getElementsByName('testimonial')


let testimonialSlideIndex = 0
function testimonialSlide(value = -1) {

    // if -1 -> slide left and -2 -> slide right
    if (value == -1) {
        testimonialSlideIndex -= 1
    } else if (value == -2) {
        testimonialSlideIndex += 1
    } else {
        testimonialSlideIndex = value
    }

    if (testimonialSlideIndex  > (testimonialSlideshow.children.length - 1)) testimonialSlideIndex = 0
    if (testimonialSlideIndex < 0 ) testimonialSlideIndex = testimonialSlideshow.children.length - 1

    // translating
    testimonialSlideshow.style.transform = `translate( ${testimonialSlideIndex * -100}%, 0)`;

    // making radio checked
    testimonialRadioItems[testimonialSlideIndex].checked = true

}
