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
					- Hit персона
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="hit_person__content">

				<div class="hit_person__head">Hit персона</div>

				<div class="hit_person__text">
					Хит-персона! Каждую пятницу с 11 до 12-ти часовое интервью со звездами! От нас не скроется ни одна звезда! Они приходят и рассказывают все сами! В программе хит-персона, часовое интервью Калашниковой с твоим кумиром! Каждую пятницу с 11 до 12!
				</div>

				<div class="guests__wrapper">

					<div v-for="(guest, index) in guests" :key="index" class="guests__content_box rounded">
						<div class="guests__item_img a">
							<img :src="guest.img" alt="guest_pic">
						</div>

						<div class="guests__item_name">{{ guest.name }}</div>

						<div class="guests__item_wrap">
							<div class="guests__item_date">{{ guest.date }}</div>

							<div class="guests__listen">
								<span class="guests__listen_str">Слушай</span>
								<div class="guests__listen_icon">
									<i class="material-icons play">play_arrow</i>
								</div>
							</div>
						</div>
					</div>

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

		</aside>

		<Footer/>

	</div>

</template>


<script>

	import onAirNavigation from '@/components/onAirNavigation';

	export default {

		data() {
			return {
				showChips: false,
				guests:
				[
					{
						id: 1,
						name: 'Doni',
						img: require('~/assets/img/guest_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 2,
						name: 'Doni',
						img: require('~/assets/img/guest_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 3,
						name: 'Doni',
						img: require('~/assets/img/guest_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 4,
						name: 'Doni',
						img: require('~/assets/img/guest_4.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 5,
						name: 'Doni',
						img: require('~/assets/img/guest_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 6,
						name: 'Doni',
						img: require('~/assets/img/guest_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 7,
						name: 'Doni',
						img: require('~/assets/img/guest_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 8,
						name: 'Doni',
						img: require('~/assets/img/guest_4.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 9,
						name: 'Doni',
						img: require('~/assets/img/guest_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 10,
						name: 'Doni',
						img: require('~/assets/img/guest_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
				]
			}
		},
		components: {
			'onAirNavigation': onAirNavigation
		},


	}

</script>


<style scoped>

	.main_image {
		margin: 30px 0 30px 0;
		background: url('~/assets/img/hit_person_main_image.png') no-repeat;
	}

	.hit_person__head {
		display: inline-block;
		font-size: 20px;
		margin: 0 0 25px 25px;
		padding: 9px 17px 7px 17px;
		background: linear-gradient(to right, #6800b6, #f70070);
		color: white;
		font-weight: 400;
	}

	.hit_person__text {
		color: #7e7aa1;
		font-size: 18px;
		font-weight: 400;
		padding: 0px 120px 30px 25px;
		letter-spacing: 0.33px;
		line-height: 26px;
	}

	.hit_person__content {

	}

	.guests__listen {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.guests__listen_str {
		margin: 0 15px 0 0;
		font-size: 12px;
		font-weight: 700;
		color: #7e7aa1;
	}

	.guests__listen:hover .guests__listen_str {
		color: #f60036;
	}

	.guests__listen:hover .guests__listen_icon {
		background: #f60036;
	}

	.guests__listen_icon {
		width: 28px;
		height: 28px;
		border-radius: 30px;
		background: #7e7aa1;
		text-align: center;
		line-height: 40px;
		box-shadow: 2px 2px 15px 0px #7e7aa1;

	}

	.guests__item_wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.guests__listen_icon i {
		font-size: 20px;
		color: white;
	}

	.guests__wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.guests__wrapper:after {
		content: "";
		width: 295px;
	}

	.guests {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.guests__content {
		display: flex;
		justify-content: space-between;
	}

	.guests__content_box {
		padding: 18px;
		width: 295px;
		height: 270px;
		background: #fff;
		margin: 0px 0 10px 0;
	}

	.guests__item_img {
		margin: 0 0 15px 0;
		width: 262px;
		height: 178px;
		cursor: pointer;
	}

	.guests__item_name {
		font-weight: bold;
		color: #19106a;
	}

	.guests__item_date {
		font-size: 14px;
		color: #7e7aa1;
		letter-spacing: 0.3px;
	}
</style>