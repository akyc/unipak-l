document.addEventListener("DOMContentLoaded", function() {

	feather.replace();
	
	let wow = new WOW(
		{
		  boxClass:     'wow',      // animated element css class (default is wow)
		  animateClass: 'animate__animated', // animation css class (default is animated)
		  offset:       0,          // distance to the element when triggering the animation (default is 0)
		  mobile:       true,       // trigger animations on mobile devices (default is true)
		  live:         true,       // act on asynchronously loaded content (default is true)
		  callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		  },
		  scrollContainer: null,    // optional scroll container selector, otherwise use window,
		  resetAnimation: true,     // reset animation on end (default is true)
		}
	  );
	wow.init();

	$("#InputPhone").mask("+7(999) 999-99-99");

	function scrollToTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
	var aboutCompanySwiperAutoplay = 5000;
	var	aboutCompanySwiper = new Swiper ('section.about-company .swiper-container', {
			effect: 'fade',
			loop: true,
			watchSlidesProgress: true,
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: aboutCompanySwiperAutoplay,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function(swiper, current, total){
					$('.total').text('0'+total);
					$('.current').text('0'+current);
				},
			},
			navigation: {
				nextEl: '.button-next',
				prevEl: '.button-prev',
			},
			on:{
				progress: function(data){
					move();
				},
			} 
		});
		function move() {
			var elem = $('.progress-line');
			var height = 1;
			var autoplayTime = aboutCompanySwiperAutoplay / 100;
			var id = setInterval(frame, autoplayTime);
			function frame() {
				if (height >= 100) {
					clearInterval(id);
					height = 0;
				} else {
					height++;
					elem.height(height + '%');
				}
			}
		}
	$('.js-up').on('click', scrollToTop);
});

// transform: translate3d(0px, 0px, 0px) scale(1, 0.45275)