<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					В эфире -
					<nuxt-link :to="{ path: '/on-air/programs'}">
						Программы
					</nuxt-link>
					- Погода
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="weather__content">

				<div class="weather__head">Погода</div>

				<div class="weather__text">
					«Погода» - выпуск прогноза погоды . <br>
					<br>
					Выходит по будням , каждый час с 9.20 до 22.20 <br>
					Суббота, воскресение , каждый час с 10.20 до 21.20
				</div>

			</div>

		</main>

		<aside class="aside__left">

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

			<div class="aside__left_item">
				<img src="~assets/img/dummy.png" alt="dummy.png">
			</div>

		</aside>

		<Footer/>

	</div>

</template>


<script>

	import onAirNavigation from '@/components/onAirNavigation';

	export default {

		components: {
			'onAirNavigation': onAirNavigation
		},


	}

</script>


<style scoped>

	.main_image {
		margin: 30px 0 30px 0;
		background: url('~/assets/img/weather_main_image.png') no-repeat;
	}

	.weather__head {
		display: inline-block;
		font-size: 20px;
		margin: 0 0 25px 0;
		padding: 9px 17px 7px 17px;
		background: linear-gradient(to right, #6800b6, #f70070);
		color: white;
		font-weight: 400;
	}

	.weather__text {
		color: #7e7aa1;
		font-size: 18px;
		font-weight: 400;
		padding: 0px 119px 0 0;
		letter-spacing: 0.33px;
		line-height: 26px;
	}

	.weather__content {
		padding: 0 25px;
	}

</style>