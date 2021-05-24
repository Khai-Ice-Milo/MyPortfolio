// Preloader
window.onload = function () {
	document.body.classList.add("loaded");
};

$(document).ready(function () {
	//  ============= Slick Slider Settings =========

	$(".products__slider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="btn your-class-arrow btn-juliet" id="prev" type="button"><img src="../img/icons/prev.svg" alt=""></button>',
		nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="../img/icons/next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					// arrows: false,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					// slidesToScroll: 3,
					infinite: true,
					// dots: true
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					infinite: true,
                    arrows: true
				},
			},
			{
				breakpoint: 992,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 768,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 650,
				settings: {
                    slidesToShow: 2,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
			{
				breakpoint: 555,
				settings: {
                    slidesToShow: 1,
                    arrows: false,
					infinite: true,
					dots: true
				},
			},
		],
	});
	$(".testiomonials__slider").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow:
			'<button id="prev" type="button"><img src="/assets/img/icons/prev.svg" alt=""></button>',
		nextArrow:
			'<button id="next" type="button"><img src="/assets/img/icons/next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$(".pop-up__select-wrapper").selectric({
		maxHeight: 200,
	});

	//  ============= Back To Top =========

	function backToTop() {
		$(".footer__up").on("click", (e) => {
			e.preventDefault();
			$("html").animate({ scrollTop: 0 }, 1000);
		});
	}
	backToTop();

	//  ============= Pop Up =========

	$(".header__button").click(function () {
		$(".pop-up").animate({"right":"0"}, "slow");
	});

	$(".pop-up__cross").on("click", (e) => {
		e.preventDefault();
		$(".pop-up").animate({"right":"-100%"}, "slow");
	});

	//  ============= COUNTER ===============

	$(document).ready(function () {
		$(".btn-minus").click(function () {
			var $input = $(this).parent().find("input");
			var count = parseInt($input.val()) - 100 + " g";
			// var count = parseInt($('.pop-up__price')) - 100;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
		$(".btn-plus").click(function () {
			var $input = $(this).parent().find("input");
			$input.val(parseInt($input.val()) + 100 + " g");
			$input.change();
			return false;
		});
	});
});
let collapseElements = document.querySelectorAll('[data-toggle="collapse"]');
const CLASS_SHOW = 'show';
const CLASS_COLLAPSE = 'collapse';
const CLASS_COLLAPSING = 'collapsing';
const CLASS_COLLAPSED = 'collapsed';
const ANIMATION_TIME = 350; // 0.35s

function handleCollapseElementClick(e) {
    let el = e.currentTarget;
    let collapseTargetId = el.dataset.target || el.href || null;
    if (collapseTargetId) {
        let targetEl = document.querySelector(collapseTargetId);
        let isShown = targetEl.classList.contains(CLASS_SHOW) || targetEl.classList.contains(CLASS_COLLAPSING);
        if(!isShown) {
            targetEl.classList.remove(CLASS_COLLAPSE);
            targetEl.classList.add(CLASS_COLLAPSING);
            targetEl.style.height = 0
            targetEl.classList.remove(CLASS_COLLAPSED);
            setTimeout(() => {
                targetEl.classList.remove(CLASS_COLLAPSING);
                targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
                targetEl.style.height = '';
            }, ANIMATION_TIME)
            targetEl.style.height = targetEl.scrollHeight + 'px';
        } else {
            targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`
            targetEl.offsetHeight; // force reflow
            targetEl.classList.add(CLASS_COLLAPSING);
            targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
            targetEl.style.height = '';
            setTimeout(() => {
                targetEl.classList.remove(CLASS_COLLAPSING);
                targetEl.classList.add(CLASS_COLLAPSE);
            }, ANIMATION_TIME)
        }
    }
}

collapseElements.forEach((el) => {
    el.addEventListener('click', handleCollapseElementClick)
})