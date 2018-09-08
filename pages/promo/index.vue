<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					Акции
				</Breadcrumps>

			</section>

		</header>

		<main id="main">

			<div class="promo__wrapper">

				<div v-for="(promo, index) in promos" :key="index" class="promo__content_box rounded">
					<div class="promo__item_img a">
						<img :src="promo.img" alt="">
					</div>
					<div class="promo__item_name">{{ promo.name }}</div>
					<div class="promo__item_date">{{ promo.date }}</div>
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

	export default {

		data() {
			return {
				promos:
				[
					{
						id: 1,
						name: 'Doni',
						img: require('~/assets/img/promo_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 2,
						name: ' Doni DoniDoni Doni Doni Doni Doni DoniDoni DoniDoni Doni DoniDoniDoniDoni Doni Doni Doni Doni Doni Doni Doni Doni DoniDoni ',
						img: require('~/assets/img/promo_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 3,
						name: 'Doni',
						img: require('~/assets/img/promo_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 4,
						name: 'Doni',
						img: require('~/assets/img/promo_4.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 5,
						name: 'Doni',
						img: require('~/assets/img/promo_5.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 6,
						name: 'Doni',
						img: require('~/assets/img/promo_6.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 7,
						name: 'Doni',
						img: require('~/assets/img/promo_1.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 8,
						name: 'Doni',
						img: require('~/assets/img/promo_2.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 9,
						name: 'Doni',
						img: require('~/assets/img/promo_3.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 10,
						name: 'Doni',
						img: require('~/assets/img/promo_4.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 11,
						name: 'Doni',
						img: require('~/assets/img/promo_5.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
					{
						id: 12,
						name: 'Doni',
						img: require('~/assets/img/promo_6.png'),
						date: '01.06.2018',
						type: 'hit-person'
					},
				]

			}
		},

	}

</script>


<style scoped>

	.promo__wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.promo__wrapper:after {
		content: "";
		width: 295px;
	}

	#header {
		padding: 0 98px 55px 0
	}

	#main {
		width: 1044px;

		padding: 0 98px 0 0;
		float: right;
	}

	.promo {
		float: left;
		width: 1059px;
		padding: 0 20px 30px 98px;
	}

	.promo__content {
		display: flex;
		justify-content: space-between;
	}

	.promo__content_box {
		padding: 18px;
		width: 295px;
		height: 270px;
		/* outline: 1px dashed #808080; */
		background: #fff;
		margin: 0 0 10px 0;
		position: relative;
	}

	.promo__item_img {
		margin: 0 0 8px 0;
		width: 262px;
		height: 178px;
		cursor: pointer;
	}

	.promo__item_name {
		font-weight: bold;
		color: #19106a;
		height: 32px;
		overflow: hidden;
		margin: 0 0 5px 0;
		line-height: 1;
	}

	.promo__item_date {
		font-size: 14px;
		color: #7e7aa1;
		letter-spacing: 0.3px
	}

</style>