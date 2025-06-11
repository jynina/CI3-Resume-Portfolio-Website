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
});
  