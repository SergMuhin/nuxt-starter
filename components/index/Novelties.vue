<template>

	<div>

		<section class="section novelties">

			<div class="novelties__head">

				<h3 class="head_text">Новинки</h3>

				<nuxt-link :to="{ name: 'novelty'}">
					<span class="see_all">
						Смотреть все
					</span>
				</nuxt-link>

			</div>

			<div class="novelties__content">

				<div class="novelties__slider">

					<no-ssr>

						<carousel
						:navigationEnabled=true
						:paginationEnabled=false
						navigationPrevLabel='<div class="slider_arrow prev"><i class="material-icons">navigate_before</i></div>'
						navigationNextLabel='<div class="slider_arrow next"><i class="material-icons">navigate_next</i></div>'
						:per-page=5
						:scrollPerPage=false
						>

						<slide
						v-for="(novelty, index) in novelties"
						:data-index="index"
						:key="index"
						>
						<div class="novelties__context_box rounded">

							<div :style="{backgroundImage: 'url(' + novelty.img + ')'}" class="novelties__item_img rounded">
								<div @click="likeAction($event)" class="novelties__item_like">
									<i class="material-icons">favorite</i>
								</div>
							</div>
							<div class="novelties__item_artist">{{ novelty.artist }}</div>
							<div class="novelties__item_song">{{ novelty.track }}</div>
						</div>

					</slide>

				</carousel>

			</no-ssr>

		</div>

	</div>

</section>

</div>

</template>

<script>

	import { Carousel, Slide } from 'vue-carousel';

	export default {

		data() {
			return {
				novelties: [
					{
						img: require('~/assets/img/novelties__item_1.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_2.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_3.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_4.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_5.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_1.png'),
						artist: 'Артист',
						track: 'Песня'
					},
					{
						img: require('~/assets/img/novelties__item_2.png'),
						artist: 'Артист',
						track: 'Песня'
					}
				]
			}
		},
		methods: {
			likeAction(event) {
				event.target.closest('.novelties__item_like').classList.toggle('liked')
			},
		},
		components: {
			Carousel,
			Slide
		},

	}

</script>

<style scoped>

	.novelties {
		margin: 10px 0 0 0;
	}

	.novelties__item_like {
		padding: 0 0px 0 1px;
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
		margin: 50px 15px 0 0;
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