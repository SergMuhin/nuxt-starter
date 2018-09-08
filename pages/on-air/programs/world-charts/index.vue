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
					- Мировые чарты
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="world_charts__content">

				<div class="world_charts__head">Мировые чарты</div>

				<div class="world_charts__text">
					Топ-3 песен чартов разных стран, таких как США, Великобритания, Франция, Германия и других. В эфире — каждый час.
				</div>

			</div>

		</main>

		<aside class="aside__left">

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
		background: url('~/assets/img/world_charts_main_image.png') no-repeat;
	}

	.world_charts__head {
		display: inline-block;
		font-size: 20px;
		margin: 0 0 25px 0;
		padding: 9px 17px 7px 17px;
		background: linear-gradient(to right, #6800b6, #f70070);
		color: white;
		font-weight: 400;
	}

	.world_charts__text {
		color: #7e7aa1;
		font-size: 18px;
		font-weight: 400;
		padding: 0px 119px 0 0;
		letter-spacing: 0.35px;
		line-height: 26px;
	}

	.world_charts__content {
		padding: 0 25px;
	}

</style>