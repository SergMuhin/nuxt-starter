<template>

	<div>

		<div class="header__slider">

			<no-ssr>

				<carousel
				:navigationEnabled=true
				navigationPrevLabel='<div class="slider_arrow prev"><i class="material-icons">navigate_before</i></div>'
				navigationNextLabel='<div class="slider_arrow next"><i class="material-icons">navigate_next</i></div>'
				:per-page=1
				:loop=true>
				<slide>
					<img src="~assets/img/banner.png" alt="banner_1">
				</slide>
				<slide>
					<img src="~assets/img/banner.png" alt="banner_1">
				</slide>
				<slide>
					<img src="~assets/img/banner.png" alt="banner_1">
				</slide>
				<slide>
					<img src="~assets/img/banner.png" alt="banner_1">
				</slide>
			</carousel>

		</no-ssr>

	</div>

</div>

</template>


<script>

	import { Carousel, Slide } from 'vue-carousel';

	export default {

		data() {
			return {

			}
		},
		components: {
			Carousel,
			Slide
		},
		methods: {

		}

	}

</script>


<style>

	.header__slider .VueCarousel {
		width: 944px ;
	}

	.header__slider .VueCarousel-dot-container {
		position: absolute;
		bottom: 20px;
		left: calc(50% - 32px);
	}

	.header__slider {
		clear: both;
		width: 944px;
		height: 489px;
	}

	.header__slider .VueCarousel-pagination li {
		padding: 0 5px !important;
		opacity: 0.5;
	}

	.header__slider .VueCarousel-dot button {
		width: 8px !important;
		height: 8px !important;
	}

	.header__slider li.VueCarousel-dot--active {
		opacity: 1;
	}

	.header__slider li.VueCarousel-dot--active button{
		background: white !important;
	}

</style>