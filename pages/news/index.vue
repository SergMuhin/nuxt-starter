<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					Новости
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<div class="additional_content">

				<div class="chip__wrapper">
					<div class="chip type_chip">Хит News</div>
					<div class="chip type_chip">Новости радиостанции</div>
					<div class="chip type_chip active_chip">Все</div>
				</div>

				<div class="back_button__wrapper" @click="$router.go(-1)">
					<div class="back_button__icon">
						<i class="material-icons">navigate_before</i>
					</div>
					<div class="back_button__str">Назад</div>
				</div>

			</div>

			<div class="main_image"></div>

			<div class="news__wrapper">

				<nuxt-link :to='{ path : "news/" + news_item.name }' v-for="(news_item, index) in news" :key="index">

					<div class="news__content_box rounded">
						<div class="news__item_img a">
							<img :src="news_item.img" alt="news_item_pic">
						</div>
						<div class="news__item_name">{{ news_item.name }}</div>
						<div class="news__item_date">{{ news_item.date }}</div>
					</div>

				</nuxt-link>

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

	export default {
		data() {
			return {
				playedValue: 100,
				news:
				[
					{
						id: 1,
						name: 'Новость 1',
						link: 'novost-1',
						img: require('~/assets/img/news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 2,
						name: 'Сегодня в мире произошло чтото очень интересное',
						link: 'novost-2',
						img: require('~/assets/img/news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 3,
						name: 'Новость 3',
						link: 'novost-3',
						img: require('~/assets/img/news_item_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 4,
						name: 'Новость 4',
						link: 'novost-4',
						img: require('~/assets/img/news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 5,
						name: 'Новость 5',
						link: 'novost-5',
						img: require('~/assets/img/news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 6,
						name: 'Новость 6',
						link: 'novost-6',
						img: require('~/assets/img/news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 7,
						name: 'Новость 7',
						link: 'novost-7',
						img: require('~/assets/img/news_item_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 8,
						name: 'Новость 8',
						link: 'novost-8',
						img: require('~/assets/img/news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 9,
						name: 'Новость 9',
						link: 'novost-9',
						img: require('~/assets/img/news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 10,
						name: 'Новость 10',
						link: 'novost-10',
						img: require('~/assets/img/news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 11,
						name: 'Doni',
						img: require('~/assets/img/news_item_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
				]
			}
		},

	}

</script>


<style scoped>

	.main_image {
		margin: 0 0 30px 0;
		background: url('~/assets/img/news_main_image.png') no-repeat;
	}

	.news__listen {
		position: absolute;
		bottom: 5px;
		right: 15px;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.news__listen_str {
		margin: 0 15px 0 0;
		font-size: 12px;
		font-weight: 700;
		color: #7e7aa1;
	}

	.news__listen:hover .news__listen_str {
		color: #f60036;
	}

	.news__listen:hover .news__listen_icon {
		background: #f60036;
	}

	.news__listen_icon {
		width: 28px;
		height: 28px;
		border-radius: 30px;
		background: #7e7aa1;
		text-align: center;
		line-height: 36px;
		box-shadow: 2px 2px 15px 0px #7e7aa1;

	}

	.news__listen_icon i {
		font-size: 20px;
		color: white;
	}

	.news__wrapper {
		margin: 0 0 30px 0;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.news__wrapper:after {
		content: "";
		width: 295px;
	}

	#header {
		padding: 0 98px 25px 0;
	}

	.news {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.news__content {
		display: flex;
		justify-content: space-between;
	}

	.news__content_box {
		padding: 18px;
		width: 295px;
		height: 270px;
		background: #fff;
		margin: 0px 0px 10px 0;
		position: relative;
	}

	.news__item_img {
		margin: 0 0 10px 0;
		width: 262px;
		height: 178px;
		cursor: pointer;
	}

	.news__item_name {
		margin: 0 0 5px 0;
		font-weight: bold;
		height: 32px;
		color: #19106a;
	}

	.news__item_date {
		font-size: 14px;
		color: #7e7aa1;
		letter-spacing: 0.3px;
	}

</style>