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
					- Hit news
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">

			<onAirNavigation/>

			<div class="main_image"></div>

			<div class="hit_news__wrapper">

				<div v-for="(hit_news_item, index) in hit_news" :key="index" class="hit_news__content_box rounded">
					<div class="hit_news__item_img a">
						<img :src="hit_news_item.img" alt="hit_news_item_pic">
					</div>
					<div class="hit_news__item_name">{{ hit_news_item.name }}</div>

					<div class="hit_news__item_wrap">
						<div class="hit_news__item_date">{{ hit_news_item.date }}</div>

						<div class="hit_news__listen">
							<span class="hit_news__listen_str">Слушай</span>
							<div class="hit_news__listen_icon">
								<i class="material-icons play">play_arrow</i>
							</div>
						</div>
					</div>
				</div>

			</div>

			<vs-pagination :vs-total="13" :vs-current="2" :vs-max="8"></vs-pagination>

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
				hit_news:
				[
					{
						id: 1,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 2,
						name: 'DoniDoni DoniDoni DoniDoni DoniDoni DoniDoni DoniDoni',
						img: require('~/assets/img/hit_news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 3,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 4,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 5,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 6,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 7,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 8,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 9,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 10,
						name: 'Doni',
						img: require('~/assets/img/hit_news_item_2.png'),
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
		margin: 0 0 30px 0;
		background: url('~/assets/img/hit_news_main_image.png') no-repeat;
	}

	.hit_news__listen {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.hit_news__listen_str {
		margin: 0 15px 0 0;
		font-size: 12px;
		font-weight: 700;
		color: #7e7aa1;
	}

	.hit_news__listen:hover .hit_news__listen_str {
		color: #f60036;
	}

	.hit_news__listen:hover .hit_news__listen_icon {
		background: #f60036;
	}

	.hit_news__listen_icon {
		width: 28px;
		height: 28px;
		border-radius: 30px;
		background: #7e7aa1;
		text-align: center;
		line-height: 40px;
		box-shadow: 2px 2px 15px 0px #7e7aa1;

	}

	.hit_news__listen_icon i {
		font-size: 20px;
		color: white;
	}

	.hit_news__wrapper {
		margin: 0 0 30px 0;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.hit_news__wrapper:after {
		content: "";
		width: 295px;
	}

	.hit_news {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.hit_news__content {
		display: flex;
		justify-content: space-between;
	}

	.hit_news__content_box {
		padding: 18px;
		width: 295px;
		height: 270px;
		background: #fff;
		margin: 0px 0 10px 0;
	}

	.hit_news__item_img {
		margin: 0 0 15px 0;
		width: 262px;
		height: 178px;
		cursor: pointer;
	}

	.hit_news__item_name {
		font-weight: bold;
		color: #19106a;
	}

	.hit_news__item_date {
		align-self: flex-start;
		font-size: 14px;
		color: #7e7aa1;
		letter-spacing: 0.3px;
		margin: 4px 0 0 0;
	}

	.hit_news__item_wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav > li {
	    background: #f00 !important;
	    border-radius: 50% !important;
	}

</style>