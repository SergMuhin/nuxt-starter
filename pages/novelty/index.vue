<template>

	<div id="main__wrapper">

		<HeaderMenu/>

		<header id="header">

			<section class="header__content_block">

				<HeaderPlayer/>

				<HeaderSocial/>

				<Breadcrumps>
					Новинки
				</Breadcrumps>

			</section>

		</header>

		<main id="main_content">


			<div class="head_text">Новинки</div>

			<div class="novelties__wrapper">

				<div v-for="(novelty, index) in novelties" class="novelties__context_box rounded">
					<div :style="{backgroundImage: 'url(' + novelty.img + ')'}" class="novelties__item_img rounded" >
						<div @click="likeAction($event)" class="novelties__item_like">
							<i class="material-icons">favorite</i>
						</div>
					</div>
					<div class="novelties__item_artist">{{ novelty.artist }}</div>
					<div class="novelties__item_song">{{ novelty.track }}</div>
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

				novelties:
				[
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_1.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_2.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_3.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_4.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_5.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_2.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_1.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_3.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_5.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_3.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_4.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_2.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_1.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_5.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_3.png')
					},
					{
						artist: 'Артист',
						track: 'Песня',
						img: require('~/assets/img/novelties__item_2.png')
					},
				]

			}
		},
		methods: {
			likeAction(event) {
				event.target.closest('.novelties__item_like').classList.toggle('liked')
			}
		}
	}

</script>


<style scoped>

	.novelties__wrapper {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.novelties__wrapper:after {
		content: "";
		width: 446px;
	}

	.head_text {
		display: block;
		font-size: 20px;
		margin: 25px 0;
		font-weight: bold;
	}

	.novelties {
		/* height: 436px; */
		margin: 10px 0 0 0;
	}

	.novelties__slider,
	.novelties__slider .slick-track,
	.novelties__slider .slick-list
	{
		max-height: 350px !important;
	}

	.novelties__item_like {
		padding: 1px 0 0 1px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28px;
		position: absolute;
		height: 28px;
		background: #bfbcd1;
		right: 7px;
		top: 10px;
		border-radius: 48px;
		cursor: pointer;
		-webkit-transition: all 0.2s ease-in;
		transition: all 0.2s ease-in;
		color: #fff;
	}

	.novelties__item_like i {
		font-size: 18px;
	}

	.novelties__item_like.liked {
		background: white;
		color: red;
	}

	.novelties__item_like.liked i {
		font-size: 20px
	}

	.slick-center .novelties__item_like {
		padding: 0 0 0 2px;
		width: 36px;
		height: 36px;
	}

	.slick-center .novelties__item_like i {
		font-size: 24px;
	}

	.novelties__context_box {
		padding: 18px;
		background: white;
		text-align: center;
		margin: 0 0 15px 0;
	}


	.novelties__context_box.slick-center {
		background: #0000;
		margin: -5px 0 0 0;
		width: 280px !important;
		height: 300px;
		overflow: visible;
	}

	.slick-center .novelties__item_img {
		overflow: visible;
		width: 240px;
		height: 240px;
	}

	.novelties__item {

	}

	.novelties__item_img {
		position: relative;
		width: 186px;
		height: 186px;
		-webkit-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 15px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 25px 23px -10px #bab8cc;
		margin: 0 0px 30px 1px;
		background-position: inherit;
		background-size: cover !important;
	}

	.novelties__item_img.a {
		background: url('~/assets/img/novelties__item_1.png');
	}

	.novelties__item_img.b {
		background: url('~/assets/img/novelties__item_2.png');
	}

	.novelties__item_img.c {
		background: url('~/assets/img/novelties__item_3.png');
	}

	.novelties__item_img.d {
		background: url('~/assets/img/novelties__item_4.png');
	}

	.novelties__item_img.e {
		background: url('~/assets/img/novelties__item_5.png');
	}

	.novelties__item_artist {
		font-weight: bold;
		color: #19106a;
		margin: 0 0 5px 0;
	}

	.novelties__item_song {
		font-size: 14px;
		color: #7e7aa1;
	}

</style>