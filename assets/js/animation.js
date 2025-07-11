

$(document).ready(() => {
     var sectionIds = $('a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 100 && scrollPosition >= containerOffset - 100){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });

    var typed = new Typed('#typed', {
        stringsElement: '.typed-strings',
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });

    $('.snow-button').on('mousemove', function (e) {
		let $snowflake = $('<div class="snowflake">❅</div>');
		$snowflake.css({
			left: e.pageX + (Math.random() * 20 - 10) + 'px',
			top: e.pageY + 'px'
		});

		$('body').append($snowflake);

		setTimeout(() => {
			$snowflake.remove();
		}, 2000);
	});


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
            circularProgress.css('background', `conic-gradient(#A5998D ${progressStartValue * 3.6}deg, #ededed 0deg)`);

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

    // function isScrolledIntoView(elem){
    //     var docViewTop = $(window).scrollTop();
    //     var docViewBottom = docViewTop + $(window).height();

    //     console.log(docViewTop, docViewBottom);

    //     var elemTop = $(elem).offset().top;
    //     var elemBottom = elemTop + $(elem).height();

    //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
    // }

    // function refreshIndicators() {
    //     $('.nav-item').each(function (){
    //         if(isScrolledIntoView($('#' + $(this).attr('data-nav')))){
    //             $(this).addClass('active');
    //             console.log(this)
    //         }else{
    //             $(this).removeClass('active');
    //             console.log("not in view ")
    //         }
    //     })
    // }
    // refreshIndicators();

    // $(window).bind('scroll', refreshIndicators);

});
  