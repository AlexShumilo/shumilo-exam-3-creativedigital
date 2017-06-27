/* SLICK SLIDER */
$(document).ready(function(){
    $('.works__slider').slick({
        dots: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false
                }
            } ]

    });
    $('.team__slider').slick({
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '-10px',
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    initialSlide: 0,
                }
                },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }]
    });
});
/* END SLICK SLIDER */

/* GOOGLE MAP */
var map;
function initMap() {
    map = new google.maps.Map(document.querySelector('.contact__map'), {
        center: {lat: 48.733467, lng: 37.577867},
        zoom: 17,
        scrollwheel: false,
    });

    var image = 'map-pointer.png';
    var marker = new google.maps.Marker({
        position: {lat: 48.734404, lng: 37.579732},
        map: map,
        icon: image
    });

}
/* GOOGLE MAP END*/
/* SMOOTH SCROLL */

let smoothScrollTo = (function () {
    let timer, start, factor;
    return function (target, duration) {
        let offset = window.pageYOffset;
        let delta  = target - window.pageYOffset; // Y-offset difference
        duration = duration || 1000;              // default 1 sec animation
        start = Date.now();                       // get start time
        factor = 0;
        if( timer ) {
            clearInterval(timer); // stop any running animation
        }
        function step() {
            let y;
            factor = (Date.now() - start) / duration; // get interpolation factor
            if( factor >= 1 ) {
                clearInterval(timer); // stop animation
                factor = 1;           // clip to max 1.0
            }
            y = factor * delta + offset;
            window.scrollBy(0, y - window.pageYOffset);
        }
        timer = setInterval(step, 10);
        return timer; // return the interval timer, so you can clear it elsewhere
    };
}());
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll').forEach((scrollLink) => {
        scrollLink.addEventListener('click', (event) => {
            let anchor = scrollLink.getAttribute('href');
            let anchorTo = document.querySelector(anchor);
            event.preventDefault();
            smoothScrollTo(anchorTo.offsetTop, 800);
        });
    })
});

/* SMOOTH SCROLL END*/