<template>

	<div>

		<section class="section hitfm_radio">

			<div class="hitfm_radio__head">
				<h3 class="head_text">@hitfm_radio</h3>
			</div>

			<div class="hitfm_radio__content">

				<div class="hitfm_radio__slider">
					<no-ssr>
						<carousel
						:navigationEnabled=true
						:paginationEnabled=false
						navigationPrevLabel='<div class="slider_arrow prev"><i class="material-icons">navigate_before</i></div>'
						navigationNextLabel='<div class="slider_arrow next"><i class="material-icons">navigate_next</i></div>'
						:per-page=5
						:scrollPerPage=false
						:loop=false
						>
						<slide>
							<div class="hitfm_radio__slider_item g"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item a"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item b"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item c"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item e"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item b"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item c"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item d"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item e"></div>
						</slide>
						<slide>
							<div class="hitfm_radio__slider_item f"></div>
						</slide>
<!-- 					<div class="hitfm_radio__slider_item g"></div>
					<div class="hitfm_radio__slider_item a"></div>
					<div class="hitfm_radio__slider_item b"></div>
					<div class="hitfm_radio__slider_item c"></div>
					<div class="hitfm_radio__slider_item d"></div>
					<div class="hitfm_radio__slider_item e"></div>
					<div class="hitfm_radio__slider_item f"></div>
					<div class="hitfm_radio__slider_item g"></div>
					<div class="hitfm_radio__slider_item a"></div>
					<div class="hitfm_radio__slider_item b"></div>
					<div class="hitfm_radio__slider_item c"></div>
					<div class="hitfm_radio__slider_item d"></div>
					<div class="hitfm_radio__slider_item e"></div>
					<div class="hitfm_radio__slider_item f"></div> -->

				</carousel>
			</no-ssr>

		</div>

	</div>

</section>

</div>

</template>


<script>

	import { Carousel, Slide } from 'vue-carousel';

	export default {

		mounted() {

			// Слайдер ХитFM
			// $('.hitfm_radio__slider').slick({
			// 	infinite: true,
			// 	slidesToShow: 7,
			// 	slidesToScroll: 1,
			// 	variableWidth: true,
			// 	prevArrow: '<div class="slider_arrow prev"><i class="material-icons">navigate_before</i></div>',
			// 	nextArrow: '<div class="slider_arrow next"><i class="material-icons">navigate_next</i></div>'
			// });

			// addUnactiveClass();

			// // Клики на стрелки слайдера .hitfm_radio
			// $(document).on('click', '.hitfm_radio__slider .next', addUnactiveClass);
			// $(document).on('click', '.hitfm_radio__slider .prev', addUnactiveClass);


			// // Функция для добавления класса .unactive_slide первому и последнему элементу слайдера .hitfm_radio
			// function addUnactiveClass() {
			// 	$('.hitfm_radio__slider .unactive_slide').removeClass('unactive_slide');
			// 	$('.hitfm_radio__slider .slick-active').first().addClass('unactive_slide');
			// 	$('.hitfm_radio__slider .slick-active').last().addClass('unactive_slide');
			// };

		},
		components: {
			Carousel,
			Slide
		},

	}



</script>


<style>

	.VueCarousel-inner {
		flex-basis: 240px !important;
	}

	.hitfm_radio {
		clear: both;
		height: 240px;
		margin: 0 0 100px 0;
		padding: 0;
	}

	.hitfm_radio__head {
		padding: 0 98px;
	}

	.hitfm_radio__slider  {
		height: 240px;
	}

	.hitfm_radio__slider .next {
		position: absolute;
		right: 65px;
		top: calc(50% - 25px);
	}

	.hitfm_radio__slider .prev {
		position: absolute;
		left: 105px;
		top: calc(50% - 25px);
	}

	.unactive_slide {
		opacity: 0.2;
		width: 100px !important;
	}

	.unactive_slide {
		/* background-position: 118% !important; */
	}

	.unactive_slide {
		background-position: 100% !important;
	}

	.hitfm_radio .slick-list {
		margin: 0 auto;
		width: 1400px;
	}

	.hitfm_radio__content {
		height: 240px;
	}

	.hitfm_radio__slider {

	}

	.hitfm_radio__slider_item {
		height: 240px !important;
		width: 240px;
		cursor: pointer;
		margin: 0 !important;
	}

	.hitfm_radio__slider_item.a {
		background: url('~/assets/img/hit_fm__slider_a.png') no-repeat center;
	}

	.hitfm_radio__slider_item.b {
		background: url('~/assets/img/hit_fm__slider_b.png') no-repeat center;
	}

	.hitfm_radio__slider_item.c {
		background: url('~/assets/img/hit_fm__slider_c.png') no-repeat center;
	}

	.hitfm_radio__slider_item.d {
		background: url('~/assets/img/hit_fm__slider_d.png') no-repeat center;
	}

	.hitfm_radio__slider_item.e {
		background: url('~/assets/img/hit_fm__slider_e.png') no-repeat center;
	}

	.hitfm_radio__slider_item.f {
		background: url('~/assets/img/hit_fm__slider_f.png') no-repeat center;
	}

	.hitfm_radio__slider_item.g {
		background: url('~/assets/img/hit_fm__slider_g.png') no-repeat center;
	}



</style>