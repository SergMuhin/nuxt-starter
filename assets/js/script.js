// Клики на меню в хедере
// Слайдер в хедере
// Слайдер в новинках
// Клик на лайк в новинках
// Слайдер ХитFM
// Клики на стрелки слайдера .hitfm_radio

// Функция для добавления класса .unactive первому и последнему элементу слайдера .hitfm_radio

alert('ok');

// Клики на меню в хедере
$('.header__menu_list_item').on('click', function() {
	$('.header__menu_list_item').removeClass('active');
	$(this).addClass('active')
});

// Слайдер в хедере
$('.header__slider').slick({
	autoplay: true,
	dots: true,
	swipeToSlide: true,
	prevArrow: '<div class="slider_arrow prev"><div class="arrow"></div></div>',
	nextArrow: '<div class="slider_arrow next"><div class="arrow"></div></div>',
});

// Слайдер в новинках
$('.novelties__slider').slick({
	centerMode: true,
	centerPadding: '60px',

	slidesToShow: 5,
	swipeToSlide: true,
	// padding: '15px',
	prevArrow: '<div class="slider_arrow prev"><div class="arrow"></div></div>',
	nextArrow: '<div class="slider_arrow next"><div class="arrow"></div></div>'
});

// Клик на лайк в новинках
$('.novelties__item_circle:not(.novelties__item_liked)').on('click', function() {
	$(this).addClass('novelties__item_liked');
});

// Слайдер ХитFM
$('.hitfm_radio__slider').slick({
	infinite: true,
	slidesToShow: 7,
	slidesToScroll: 1,
	variableWidth: true,
	// swipeToSlide: true,
	prevArrow: '<div class="slider_arrow prev"><div class="arrow"></div></div>',
	nextArrow: '<div class="slider_arrow next"><div class="arrow"></div></div>'
});

addUnactiveClass();

// Клики на стрелки слайдера .hitfm_radio
$(document).on('click', '.hitfm_radio__slider .next, .hitfm_radio__slider .prev', addUnactiveClass);


// Функция для добавления класса .unactive_slide первому и последнему элементу слайдера .hitfm_radio
function addUnactiveClass() {
	$('.hitfm_radio__slider .slick-active').removeClass('unactive_slide');
	$('.hitfm_radio__slider .slick-active').first().addClass('unactive_slide');
	$('.hitfm_radio__slider .slick-active').last().addClass('unactive_slide');
	};