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
					- Хиты без правил
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="hit_no_rules__content">

				<div class="hit_no_rules__head">Хиты без правил</div>

				<div class="hit_no_rules__text">
					С понедельника по пятницу включительно с 15:00-16:00 на ХИТ FM с ведущим Ильей Обломовым хиты сражаются за первое место. Для голосования в официальном паблике Хит FM Вконтакте размещаются два хита из чартов разных стран, которых нет в ротации Хит FM. <br>
					<br>
					Победителя определяют слушатели-подписчики паблика Хит FM Вконтакте.
					Ведущий озвучивает победителя и проигрывается хит-победитель. Хронометраж рубрики — 3 минуты
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
		background: url('~/assets/img/hit_no_rules_main_image.png') no-repeat;
	}

	.hit_no_rules__head {
		display: inline-block;
		font-size: 20px;
		margin: 0 0 25px 0;
		padding: 9px 17px 7px 17px;
		background: linear-gradient(to right, #6800b6, #f70070);
		color: white;
		font-weight: 400;
	}

	.hit_no_rules__text {
		color: #7e7aa1;
		font-size: 18px;
		font-weight: 400;
		padding: 0px 119px 0 0;
		letter-spacing: 0.33px;
		line-height: 26px;
	}

	.hit_no_rules__content {
		padding: 0 25px;
	}

</style>