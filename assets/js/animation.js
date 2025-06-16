

$(document).ready(() => {

    
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
  