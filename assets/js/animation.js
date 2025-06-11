$(document).ready(()=> {

$('.skill-container').ready(() => {
    let circularProgress = $(".circular-progress"),
        progressValue = $(".progress-value");

    let progressStartValue = 0,
        progressEndValue = parseInt($(".progress-value").attr('data-progressvalue')),
        speed = 20;

    let progress = setInterval(()=> {
        progressStartValue++

        progressValue.text(`${progressStartValue}` + '%')
        circularProgress.css('background', `conic-gradient(rgb(186, 248, 248), ${progressStartValue * 3.6}deg, #ededed 0deg)`);
        if(progressStartValue == progressEndValue){
            clearInterval(progress)
        }

    }, speed)
    })

})






