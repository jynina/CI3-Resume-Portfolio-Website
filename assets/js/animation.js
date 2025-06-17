

$(document).ready(() => {
    hide_on_scroll({
        nav_id               : '',      // you must specify this for plugin to work
        nav_offset           : 200,     // after how much y-scroll, nav should hide onscroll down
        nav_position         : 'top',   // you want to see nav bar at 'top' or 'bottom', default 'top'
        hide_onscroll_mobile : false,   // disables hide-onscroll for mobile, you can set it to true
        mobile_width         : 576
    });
        
    const divs = document.querySelectorAll("div");
    const navLi = document.querySelectorAll("nav .navbar-collapse ul li");
    window.onscroll = () => {
    var current = "";

    divs.forEach((div) => {
        const divTop = div.offsetTop;
        if (pageYOffset >= divTop - 60) {
        current = div.getAttribute("id"); }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
        li.classList.add("active");
        }
    });
    };

    

    var waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: function() {
        notify('Basic waypoint triggered')
    }
    })



    $('.skill-container').on('load', function(){
        $('.skill-container').each(function () {
        const container = $(this);
        const circularProgress = container.find(".circular-progress");
        const progressValue = container.find(".progress-value");

        let progressStartValue = 0;
        const progressEndValue = parseInt(progressValue.attr('data-progressvalue'));
        const speed = 20;

        const progress = setInterval(() => {
            progressStartValue++;

            progressValue.text(`${progressStartValue}%`);
            circularProgress.css('background', `conic-gradient(rgb(186, 248, 248) ${progressStartValue * 3.6}deg, #ededed 0deg)`);

            if (progressStartValue >= progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    });
    })
    

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button =>{
        $(button).on('click', () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0){newIndex = slides.children.length - 1}
            if (newIndex >= slides.children.length) {newIndex = 0;}
            
            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active
        })
    })
});
  