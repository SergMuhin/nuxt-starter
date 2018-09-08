<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					В эфире - Программы
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="programs__wrapper">

				<div class="programs__item" v-for="program in programs">
					<nuxt-link :to="{path: program.link}">
						<img class="programs__item_img" :src="program.img" alt="">
						<div class="programs__item_name">{{program.name}}</div>
					</nuxt-link>
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

		data() {
			return {
				programs:
				[
					{
						id: 1,
						img: require('~/assets/img/programs_item_1.png'),
						name: 'Большая 20-ка',
						link: '/on-air/programs/charts'
					},
					{
						id: 2,
						img: require('~/assets/img/programs_item_2.png'),
						name: 'Хит-персона',
						link: '/on-air/programs/hit-person'
					},
					{
						id: 3,
						img: require('~/assets/img/programs_item_3.png'),
						name: 'Хиты без правил',
						link: '/on-air/programs/hits-no-rules'
					},
					{
						id: 4,
						img: require('~/assets/img/programs_item_4.png'),
						name: 'Шуры-Амуры',
						link: '/on-air/programs/hanky-panky'
					},
					{
						id: 5,
						img: require('~/assets/img/programs_item_5.png'),
						name: 'Погода',
						link: '/on-air/programs/weather'
					},
					{
						id: 6,
						img: require('~/assets/img/programs_item_6.png'),
						name: 'Hit news',
						link: '/on-air/programs/hit-news'
					},
					{
						id: 7,
						img: require('~/assets/img/programs_item_7.png'),
						name: 'Мировые чарты',
						link: '/on-air/programs/world-charts'
					}
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},

	}

</script>


<style scoped>

	.programs__wrapper {
		display: flex;
		flex-flow: row wrap;
	}

	.programs__item {
		margin: 0 20px 30px 0;
		transition: transform 0.1s ease-in;
		cursor: pointer;
	}

	.programs__item:hover {
		transform: scale(1.05, 1.05);
	}

	.programs__item_img {
		margin: 0 0 30px 0;
		width: 160px;
		height: 160px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 25px 23px -10px #bab8cc;
	}

	.programs__item_name {
		font-weight: 700;
		letter-spacing: 0.3px;
		color: #19106a;
		text-align: center;
	}

</style>