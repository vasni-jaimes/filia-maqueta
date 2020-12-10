let slide = document.querySelector('.slide');
if (slide) {
	$('.slide').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
	  cssEase: 'linear'
	});
}